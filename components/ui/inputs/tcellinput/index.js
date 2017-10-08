import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { TcellComponent } from 'tcellcomponent'

export class TcellInput extends TcellComponent {    
    render() {
        return (
            <TextField {...this.props} />
        );
    }
}

TcellInput.propTypes = {    
    type: PropTypes.string,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    maxlength: PropTypes.number,
    error: PropTypes.bool,
    label: PropTypes.string,   
    helperText: PropTypes.string, 
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func
}

export default TcellInput;