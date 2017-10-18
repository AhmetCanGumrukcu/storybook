import React from 'react'
import TcellDataFieldButton from 'tcelldatafieldbutton'
import TcellButton from 'tcellbutton'
import { Cities } from '../constants/Lookup'

export default class DataFieldButtonViewer extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCityButtonClick = this.handleCityButtonClick.bind(this);
        this.state = {
            value: null
        }

    }
    handleChange(event){       
        this.setState({ value: event.target.value });
    }
    handleCityButtonClick(){       
        this.setState({ value: 1 });
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
                                <label style={{ marginTop: tenpx }}>Data field button:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>                               
                                <TcellDataFieldButton 
                                    value={ this.state.value }                                   
                                    onChange={ this.handleChange }  
                                    name="CITY" 
                                    label="Şehir" 
                                    dataSource={ Cities } 
                                    onClick={ this.handleCityButtonClick } />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value: 8 }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set City
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton                                    
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(`Selected City : ${ this.state.value }`) }}
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
                        
                    </tbody>
                </table>
            </div >
        );
    }
}