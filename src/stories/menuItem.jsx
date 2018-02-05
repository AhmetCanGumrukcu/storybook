import React from 'react'
import PropTypes from 'prop-types'
import {withStyles } from 'material-ui/styles'
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';



class ButtonMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = { anchorEl :null}
        this.props = {propType:null}
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { anchorEl } = this.state;
        let element = null;
        if(this.props == "button"){
            element = <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
                Default
            </Button>
        }
        return(
            <div>
                {element}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                {console.log("test")}
            </div>
        );
    }
}

export default ButtonMenu;