import { Component } from 'react'
    declare module 'tcellbutton' {
    export interface TcellButtonProps {
        color?: any;
        component?: any;
        dense?: any;
        disabled?: any;
        disableFocusRipple?: any;
        disableRipple?: any;
        href?: any;
        type?: any;
        onClick?: any;
        onTouchTap?: any;
    }

    export default class TcellButton extends Component<TcellButtonProps, any> {
        render(): JSX.Element;

    }

}

