import React from 'react'
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
            <div>
                <table>
                    <tbody>                       
                        <tr style={{ borderTop: thinGrayBorder }}>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Select Multiple:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellSelectMultiple label="Ülke2" name="COUNTRY"
                                    dataSource={Countries}
                                    onSelect={this.handleCountrySelect} />
                            </td>
                        </tr>                      
                    </tbody>
                </table>
            </div >
        );
    }
}