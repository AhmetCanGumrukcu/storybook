import { Component } from 'react'
    declare module 'tcellchart' {
    export interface TcellChartProps {
        option?: any;
        notMerge?: any;
        lazyUpdate?: any;
        style?: any;
        className?: any;
        theme?: any;
        onChartReady?: any;
        showLoading?: any;
        loadingOption?: any;
        onEvents?: any;
    }

    export default class TcellChart extends Component<TcellChartProps, any> {
        render(): JSX.Element;

    }

}

