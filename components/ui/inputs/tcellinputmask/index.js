import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TcellComponent } from 'tcellcomponent'
import { TextMask } from 'react-text-mask-hoc'
import { InputAdapter } from './InputAdapter'
import Input from 'material-ui/Input'

export class TcellInputMask extends TcellComponent {
    constructor(props) {
        super(props);
        //this.state={ maskedValue: this.props.maskedValue };
        this.state = { maskedValue: this.props.value };
        //this.onChange = this.onChange.bind(this);
    }

    // onChange(event) {
    //     this.setState({maskedValue: event.target.value});
    //     if(this.props.onChange) {
    //         this.props.onChange(event.target.value);
    //     }
    // }
    componentWillReceiveProps(nextProps) {
       debugger
        if (this.props.value != nextProps.value) {           
            if(this.props.onChange){
                this.props.onChange({
                    target: {
                        value: nextProps.value,
                        name: this.props.name
                    }
                });
            }
        }
    }

    componentWillMount(){
        
    }

    render() {
        const { mask, onChange, isSpacesIncluded, filterOutChars, ...rest } = this.props;
        return (
            <TextMask
                {...rest}
                Component={InputAdapter}
                value={this.props.value}
                mask={this.props.mask}
                onChange={this.props.onChange}
            />
        );
    }
}

TcellInputMask.propTypes = {
    name: PropTypes.string,
    autoFocus: PropTypes.bool,
    inputComponent: PropTypes.func,
    maskedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rawValue: PropTypes.any,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.array,
    mask: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.bool,
        PropTypes.shape({
            mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
            pipe: PropTypes.func,
        })
    ]).isRequired,
    placeholderChar: PropTypes.string,
    keepCharPositions: PropTypes.bool,
    pipe: PropTypes.func,
    showMask: PropTypes.bool
}

export default TcellInputMask;