import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { ListItem } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import IconButton from 'material-ui/IconButton';
import { TcellComponent } from 'tcellcomponent'

import style from './style.css'
import _ from 'lodash';

const styles = theme => ({
    root: {
        paddingTop: 0,
        paddingLeft:0
    }
});

class ReadOnlyTextField extends Component {
    render() {
        return (
            <TextField { ...this.props }></TextField>
        )
    };
}


class TcellSelectMultiple extends TcellComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            anchorEl: undefined,
            open: false,
            checkedItems: {},
            display: ''
        };
    }
   

    shapeDisplay() {
        let actualDisplay = "";
        for (let key in this.state.checkedItems) {
            actualDisplay += this.state.checkedItems[key].text;
            actualDisplay += ',';
            actualDisplay += '  ';
        }
        if (actualDisplay.indexOf(',  ') > -1) {
            actualDisplay = actualDisplay.substr(0, actualDisplay.length - 3);
        }
        this.setState({ display: actualDisplay });
    }
    handleClick(event) {
        this.setState({ 
            open: true,
            anchorEl: event.currentTarget
        });
        
        setTimeout(() => {
            let oldVal = this.state.display;
            this.setState({
                display: ""
            });
            this.setState({
                display: oldVal
            });
        }, 50)


    };
    handleRequestClose = () => {
        this.setState({
           open: false 
        });
    };
    handleMenuItemClick = param => {
        if (this.state.checkedItems[param.option.id]) {
            delete this.state.checkedItems[param.option.id]
        } else {
            this.state.checkedItems[param.option.id] = param.option;
        }
        this.shapeDisplay();
        let myEvent = {
            target: {
                name: this.props.name,
                value: Object.keys(this.state.checkedItems).map((k) => this.state.checkedItems[k].id)
            }
        }
        this.props.onChange(myEvent);
    }
    setCheckedItems(dataSource, ids) {
        let idArray = [];
        if (_.isArray(ids)) {
            idArray = ids;
        } else if (!_.isEmpty(ids)) {
            idArray.push(ids);
        }
        this.setState({
            checkedItems: {}
        });
        idArray.forEach(id => {
            let found = _.find(dataSource, (option) => option.id === id);
            this.state.checkedItems[id] = found
        });
        this.shapeDisplay();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value) {
            const { dataSource } = this.props;
            const { value } = nextProps;
            this.setCheckedItems(dataSource, value)
        }
    }
    getChecked = id => {
        if (this.state.checkedItems[id]) {
            return true;
        } else {
            return false;
        }
    }
    componentDidMount() {     
        const inputNode = ReactDOM.findDOMNode(this.textField);
        const inputs = inputNode.querySelectorAll('textarea');

        //ipad forEach tanımıyor!!!!!
        // try{
        // inputs.forEach(f => alert(f));
        // }catch(e){
        //     alert(e);
        // }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('readonly', 'readonly')
        }

        if (window.device.desktop()) {        
            inputNode.querySelector('div').style.paddingRight = "14px";
        }else if (window.device.android()) {
            inputNode.querySelector('div').style.paddingRight = "28px";
         }
    }
    render() {
        const { dataSource, onChange, value, classes, ...others } = this.props;
        this.handleChange = onChange;
        return (
            <div>
                <ListItem classes={{ root: classes.root }}>
                    <ReadOnlyTextField
                        ref={(r) => { this.textField = r; }}
                        multiline
                        aria-owns={this.state.open ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        value={this.state.display}
                        { ...others }
                    >
                    </ReadOnlyTextField>
                    <ArrowDropDownIcon />
                </ListItem>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    {dataSource.map((option, index) =>
                        <MenuItem
                            key={index}
                            selected={this.selectedItem ? index === this.selectedItem.id : false}
                            onClick={() => this.handleMenuItemClick({ index, option })}>
                            <Checkbox
                                checked={this.getChecked([option.id])}>
                            </Checkbox>
                            {option.text}
                        </MenuItem>
                    )}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(TcellSelectMultiple);