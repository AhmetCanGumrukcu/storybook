import React from 'react'
import PropTypes from 'prop-types'
import {withStyles } from 'material-ui/styles'
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

class TcellPopupMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = { anchorEl :null}
        this.props = {propType:null}
        this.props = {buttonName:"Open menu"}
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { anchorEl } = this.state;
      
        return(
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    >
                    {this.props.buttonName}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Hesabım</MenuItem>
                    <MenuItem onClick={this.handleClose}>Çıkış Yap</MenuItem>
                </Menu>
            </div>
        );
    }
}

TcellPopupMenu.defaultProps = {buttonName : "Default Name"}

export default TcellPopupMenu;