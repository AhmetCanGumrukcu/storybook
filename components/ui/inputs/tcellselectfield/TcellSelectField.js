import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import  { ListItem } from 'material-ui/List';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import IconButton from 'material-ui/IconButton';
import { TcellComponent } from 'tcellcomponent'
import _ from 'lodash';

const styles = theme => ({
    root: {
        padding: 0
    }
});

class ReadOnlyTextField extends TcellComponent {
  render() {
    return (
      <TextField { ...this.props }></TextField>
    )
  };
}

class TcellSelectField extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      anchorEl: undefined,
      open: false,
      display: undefined
    };
  }  

  handleClick(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });    
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  };

  handleMenuItemClick = param => {
    let myEvent = {
      target: {
        name: this.props.name,
        value: param.option.id
      }
    }
    this.setState({
      open: false,
      display: param.option.text
    });
    this.props.onChange(myEvent);
  }

  setDisplayFromDatasource(dataSource, id) {
    if (dataSource && dataSource.length > 0) {
      let found = _.filter(dataSource, (item) => item.id === id);

      this.setState({
        display: found && found.length > 0 ? found[0].text : undefined 
      });

    } else {
      this.setState({
        display: id        
      });      
    }
    //todo
    setTimeout(() => {
      let oldVal = this.compState.display;
      this.setState({
        display: oldVal
      });
    }, 50)
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
  componentDidMount() {
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

  render() {
    const { dataSource, onChange, value, classes, ...others } = this.props;

    this.handleChange = onChange;
    return (
      <div>
        <ListItem classes={{ root: classes.root }}>
          <ReadOnlyTextField ref={(r) => { this.textField = r }}
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
              {option.text}
            </MenuItem>
          )}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(TcellSelectField);