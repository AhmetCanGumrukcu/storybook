import React from 'react'
import TcellPopupMenu from 'tcellpopupmenu';
import PropTypes from 'prop-types'
import {withStyles } from 'material-ui/styles'
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';


class ButtonMenu extends React.Component{

    render(){
        return(
            <TcellPopupMenu buttonName="Menu Button"/>
        )
    }
}

export default ButtonMenu;  