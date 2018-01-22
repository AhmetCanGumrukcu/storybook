import { Component } from 'react'
    declare module 'tcellinputmask' {
    export interface TcellInputMaskProps {
        name?: any;
        autoFocus?: any;
        inputComponent?: any;
        maskedValue?: any;
        rawValue?: any;
        onChange?: any;
        disabled?: any;
        error?: any;
        fullWidth?: any;
        id?: any;
        inputProps?: any;
        mask?: any;
        placeholderChar?: any;
        keepCharPositions?: any;
        pipe?: any;
        showMask?: any;
    }

    export default class TcellInputMask extends Component<TcellInputMaskProps, any> {
        render(): JSX.Element;

    }

}

