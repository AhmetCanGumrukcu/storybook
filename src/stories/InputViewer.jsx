import React from 'react'
import TcellInput from 'tcellinput'
import TcellInputMask from 'tcellinputmask'
import TcellButton from 'tcellbutton'

export default class InputViewer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: null,            
            countryValue: null,
            amountValue: null
        }
    }
   
    handleMaskChange = (event) => {          
        this.setState({ value: event.target.value });
    }
    handleCountryChange = (event) => {
        this.setState({ countryValue: event.target.value });
    }
    handleAmountChange = (event) => {       
        this.setState({ amountValue: event.target.value });
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
                                <label style={{ marginTop: tenpx }}>Basic text input:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellInput label="Ülke"
                                    name = "COUNTRY"
                                    value={ this.state.countryValue }
                                    onChange={ this.handleCountryChange }
                                 />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ countryValue: "Malezya" }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(this.state.countryValue); }}
                                    style={{ marginRight: '10px' }}>
                                    Show Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ countryValue: null }) }}
                                    style={{ marginRight: '10px' }}>
                                    Clear
                                </TcellButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Numeric input:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellInput label="Amount"
                                    value={ this.state.amountValue }
                                    onChange={ this.handleAmountChange }
                                    type="number"
                                 />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ amountValue: 12500 }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(this.state.amountValue); }}
                                    style={{ marginRight: '10px' }}>
                                    Show Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ amountValue: null }) }}
                                    style={{ marginRight: '10px' }}>
                                    Clear
                                </TcellButton>
                            </td>                            
                        </tr>                      
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Mask:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellInputMask label="Phone Number" guide={false}
                                    name= "PHONE_NUMBER"
                                    value={ this.state.value }                                  
                                    onChange={ this.handleMaskChange }
                                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                 />
                            </td>                         
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ value: 1234567 }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(this.state.value); }}
                                    style={{ marginRight: '10px' }}>
                                    Show Data
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => {this.setState({ value: null }) }}
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