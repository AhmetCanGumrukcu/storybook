import React from 'react'
import TcellHorizontalForm from 'tcellhorizontalform'
import TcellSelectMultiple from 'tcellselectmultiple'

import { Countries } from '../constants/Lookup'
// import TInput from '../../components/ui/inputs/t-input'
// import TInputMask from '../../components/ui/inputs/t-input-mask'
// import TAutoComplete from '../../components/ui/inputs/t-auto-complete'
// import TInputAction from '../../components/ui/inputs/t-input-action'

export default class SelectMultipleViewer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCountrySelect = (data) => {
        console.log(data);
    }

    render() {
        let tenpx = '10px';
        let thinGrayBorder = 'solid 1px #eeeeee';
        return (
            <TcellHorizontalForm columnCount={2}>
                <TcellSelectMultiple label="Ülke1" name="COUNTRY"
                    dataSource={Countries} />
                <TcellSelectMultiple label="Ülke2" name="COUNTRY"
                    dataSource={Countries} />
                <TcellSelectMultiple label="Ülke3" name="COUNTRY"
                    dataSource={Countries} />
            </TcellHorizontalForm>
        );
    }
}