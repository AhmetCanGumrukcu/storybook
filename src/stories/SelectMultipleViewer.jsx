import React from 'react'
import TcellSelectMultiple from 'tcellselectmultiple'
import TcellButton from 'tcellbutton'

import { Countries } from '../constants/Lookup'
// import TInput from '../../components/ui/inputs/t-input'
// import TInputMask from '../../components/ui/inputs/t-input-mask'
// import TAutoComplete from '../../components/ui/inputs/t-auto-complete'
// import TInputAction from '../../components/ui/inputs/t-input-action'

export default class SelectMultipleViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: null,
            value2: null
        }
    }

    handleCountryChange = (data) => {
        this.setState({ value: data.target.value });
    }

    handleCountryChange2 = (data) => {
        this.setState({ value2: data.target.value });
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
                                <TcellSelectMultiple label="Ülke" name="COUNTRY"
                                    value={ this.state.value }
                                    dataSource={ Countries }
                                    onChange={ this.handleCountryChange } />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value: [2,4] }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Country
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(`Selected Country : ${this.state.value}`) }}
                                    style={{ marginRight: '10px' }}>
                                    Show Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value: null }) }}
                                    style={{ marginRight: '10px' }}>
                                    Clear
                                </TcellButton>
                            </td>
                        </tr> 
                        <tr style={{ borderTop: thinGrayBorder }}>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Select Multiple:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellSelectMultiple label="Ülke2" name="COUNTRY2"
                                    value={ this.state.value2 }
                                    dataSource={ Countries }
                                    onChange={ this.handleCountryChange2 } />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value2: [1,3] }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Country
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(`Selected Country : ${ this.state.value2 }`) }}
                                    style={{ marginRight: '10px' }}>
                                    Show Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value2: null }) }}
                                    style={{ marginRight: '10px' }}>
                                    Clear
                                </TcellButton>
                            </td>
                        </tr>                          
                    </tbody>
                </table>
            </div >
        );
    }
}