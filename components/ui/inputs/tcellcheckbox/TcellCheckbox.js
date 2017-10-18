import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { TcellComponent } from 'tcellcomponent'

const styles = {
    checked: {
        color: green[500],
    },
};

class TcellCheckbox extends TcellComponent {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, selected){      
        let myEvent = {
            target: {
                name: event.target.name,
                value: selected
            }
        }
        this.props.onChange(myEvent);
        if (this.props.onToggle) {
            this.props.onToggle(myEvent.target.value);
        }
    };
    render() {
        const { classes, value, label, onChange, helperText, onToggle, error, ...others } = this.props;
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        checked={ value }
                        onChange={ this.handleChange }                      
                        { ...others }
                    />
                }
                label={ label }               
            />
        );
    }
}

TcellCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    onToggle: PropTypes.func
};

export default withStyles(styles)(TcellCheckbox);