import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TcellComponent } from 'tcellcomponent'
import { TextMask } from 'react-text-mask-hoc'
import { InputAdapter } from './InputAdapter'
import Input from 'material-ui/Input'

export class TcellInputMask extends TcellComponent {
    constructor(props) {
        super(props);
        this.state={ maskedValue: this.props.maskedValue };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({maskedValue: event.target.value});
        if(this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    render() {
        const { mask, onChange, isSpacesIncluded, filterOutChars,  ...rest } = this.props;
        return (
            <TextMask
                {...rest}
                Component={InputAdapter}
                value={this.state.maskedValue}
                mask={this.props.mask}
                onChange={this.onChange}
            />
        );
    }
}

TcellInputMask.propTypes = {
    autoFocus: PropTypes.bool,
    inputComponent: PropTypes.func,
    maskedValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
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