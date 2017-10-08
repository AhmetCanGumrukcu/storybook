import * as React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';
import { TcellComponent } from 'tcellcomponent'

export class TcellIconButton extends TcellComponent {
    render() {
        return (
            <IconButton {...this.props}></IconButton>
        );
    }
}

TcellIconButton.propTypes = {
    color: PropTypes.oneOf(["default", "inherit", "primary", "accent", "contrast"]),
    disabled: PropTypes.bool,
    disableRipple: PropTypes.bool,
    onClick: PropTypes.func,
    onTouchTap: PropTypes.func
}

export default TcellIconButton;