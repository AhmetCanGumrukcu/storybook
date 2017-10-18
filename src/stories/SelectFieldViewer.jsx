import React from 'react'
import TcellSelectField from 'tcellselectfield'
import TcellButton from 'tcellbutton'
import { Countries } from '../constants/Lookup'

export default class InputViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: null,
            value2: null
        }
    }

    handleChangeCountry = (data) => {       
        this.setState({ value: data.target.value });
    }
    handleChangeCountry2 = (data) => {       
        this.setState({ value2: data.target.value });
    }

    render() {
        let tenpx = '10px';
        let thinGrayBorder = 'solid 1px #eeeeee';
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>SingleSelect:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellSelectField 
                                    label="Ülke" 
                                    name="COUNTRY"
                                    value={ this.state.value }
                                    onChange={ this.handleChangeCountry }
                                    dataSource={Countries}/>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value: 2 }) }}
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
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>SingleSelect:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellSelectField label="Ülke2" name="COUNTRY2"
                                    value={ this.state.value2 }
                                    onChange={ this.handleChangeCountry2 }
                                    dataSource={Countries}/>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value2: 4 }) }}
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