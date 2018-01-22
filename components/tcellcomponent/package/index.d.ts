import { Component } from 'react'
    declare module 'tcellcomponent' {
    import {Component} from 'react';

    export interface TcellComponentProps {
    }

    export class TcellComponent extends Component<TcellComponentProps, any> {
        render(): JSX.Element;

    }

}

