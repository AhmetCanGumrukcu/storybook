import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import { TcellComponent } from 'tcellcomponent'

export class TcellAvatar extends TcellComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Avatar {...this.props}></Avatar>                                        
        );
    }
}

TcellAvatar.propTypes = {        
    alt: PropTypes.string,
    childrenClassName: PropTypes.string,
    component: PropTypes.element,
    imgProps: PropTypes.object,
    src: PropTypes.string,
    srcSet: PropTypes.string
}

export default TcellAvatar;