import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TcellComponent } from 'tcellcomponent'
import Button from 'material-ui/Button'

export class TcellButton extends TcellComponent {
    constructor(props) {
        super(props);
    }

    createFlatButton(props) {
        return (
            <Button {...props}></Button>
        );
    }

    createRaisedButton(props) {
        return (
            <Button raised {...props}></Button>
        );
    }

    createFloatingActionButton(props) {
        return (
            <Button fab {...props}></Button>
        );
    }
    createButton() {
        const { type, ...others } = this.props;

        if (type) {
            switch (type) {
                default:
                case "flat":
                    return this.createFlatButton(others);
                case "raised":
                    return this.createRaisedButton(others);
                case "floatingAction":
                    return this.createFloatingActionButton(others);
            }
        }
    }

    render() {
        let button = this.createButton();
        return (button);
    }
}

TcellButton.propTypes = {
    color: PropTypes.oneOf(["default", "inherit", "primary", "accent", "contrast"]),
    component: PropTypes.element,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    disableFocusRipple: PropTypes.bool,
    disableRipple: PropTypes.bool,
    href: PropTypes.string,
    type: PropTypes.oneOf(["flat", "raised", "floatingAction"]),
    onClick: PropTypes.func,
    onTouchTap: PropTypes.func
}

export default TcellButton;