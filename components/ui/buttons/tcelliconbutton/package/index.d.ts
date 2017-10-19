import { Component } from 'react'
    declare module 'tcelliconbutton' {
    export interface TcellIconButtonProps {
        color?: any;
        disabled?: any;
        disableRipple?: any;
        onClick?: any;
        onTouchTap?: any;
    }

    export default class TcellIconButton extends Component<TcellIconButtonProps, any> {
        render(): JSX.Element;

    }

}

