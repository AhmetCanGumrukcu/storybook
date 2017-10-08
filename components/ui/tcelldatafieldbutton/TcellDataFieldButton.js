import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import SearchIcon from 'material-ui-icons/Search';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { TcellComponent } from 'tcellcomponent'
import _ from 'lodash';
import style from './style.css'

const styles = theme => ({
    root: {
        padding: 0
    }
});

class ReadOnlyTextField extends Component {
    render() {
        return (
            <TextField { ...this.props }></TextField>
        )
    };
}
class TcellDataFieldButton extends TcellComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: undefined,
            display: undefined
        };
    }

   

    handleChange(event) {
        event.preventDefault();
        event.stopPropagation();      
        if (this.props.dataSource && this.props.dataSource.length > 0) {
            return;
        } else {
            this.props.onChange(event);
        }
    }

    handleClick() {
        this.props.onClick();
    }

    setDisplayFromDatasource(dataSource, id) {
        if (dataSource && dataSource.length > 0) {
            let found = _.filter(dataSource, (item) => item.id === id);
            this.state.display = found && found.length > 0 ? found[0].text : undefined;
        } else {
            this.setState({ display: id });
        }
        //todo
        setTimeout(() => {
            let oldVal = this.state.display;
            this.setState({
                display: oldVal
            });           
        }, 50)
    }
    componentDidMount() {
        const { dataSource, value } = this.props;
        this.setState({
            value: this.props.value
        });
        this.setDisplayFromDatasource(dataSource, value)

        let inputNode = ReactDOM.findDOMNode(this.textField);
        let inputs = inputNode.querySelectorAll('input');
        try {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('readonly', 'readonly')
            }
        } catch (e) {
            alert(e);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value) {
            const { dataSource } = this.props;
            const { value } = nextProps;
            this.setState({
                value: value
            });
            this.setDisplayFromDatasource(dataSource, value)
        }
    }
    render() {
        const { onChange, onClick, value, dataSource, classes, ...others } = this.props;

        return (
            <ListItem classes={{ root: classes.root }}>
                <ReadOnlyTextField ref={(r) => { this.textField = r }}
                value={this.state.display} onChange={this.handleChange} readOnly  { ...others }>
                </ReadOnlyTextField>
                <IconButton onClick={this.handleClick} aria-label="Search" className={style.iconButton}>
                    <SearchIcon />
                </IconButton>
            </ListItem>
        );
    };
}
TcellDataFieldButton.propTypes = {
    dataSource: PropTypes.array
}
TcellDataFieldButton.defaultProps = {
    dataSource: []
};
export default withStyles(styles)(TcellDataFieldButton);




