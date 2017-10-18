import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { TcellComponent } from 'tcellcomponent'
import isFunction from 'lodash/isFunction';

class TcellDialog extends TcellComponent {

  render() {
    const { value, children, name, cancel, ok, title, ...other } = this.props;
    let dialogContent = undefined;
   
    const contentChildren = children[0].props.children;    
    if(isFunction(contentChildren)){
      dialogContent = React.createElement(contentChildren);      
    }else{      
      dialogContent = contentChildren;
    }
      
    const actionsChildren = children[1].props.children;

    return (
      <Dialog
        ignoreBackdropClick
        ignoreEscapeKeyUp      
        {...other}
      >
        <DialogTitle>{ title }</DialogTitle>
        <DialogContent>
          { 
            dialogContent
          }
        </DialogContent>
        <DialogActions>
         {
           actionsChildren
         }
        </DialogActions>
      </Dialog>
    );
  }
}

export default TcellDialog;
