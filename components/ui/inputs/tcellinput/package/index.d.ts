import { Component } from 'react'
    declare module 'tcellinput' {
    export interface TcellInputProps {
        type?: any;
        id?: any;
        defaultValue?: any;
        value?: any;
        disabled?: any;
        multiline?: any;
        maxlength?: any;
        error?: any;
        label?: any;
        helperText?: any;
        rows?: any;
        rowsMax?: any;
        onFocus?: any;
        onBlur?: any;
        onChange?: any;
        onKeyDown?: any;
    }

    export default class TcellInput extends Component<TcellInputProps, any> {
        render(): JSX.Element;

    }

}

