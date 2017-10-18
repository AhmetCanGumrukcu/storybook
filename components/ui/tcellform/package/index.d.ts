import { Component } from 'react'
    declare module 'tcellform' {
    export interface TcellFormProps {
        model?: any;
    }

    export default class TcellForm extends Component<TcellFormProps, any> {
        render(): JSX.Element;

    }

}

