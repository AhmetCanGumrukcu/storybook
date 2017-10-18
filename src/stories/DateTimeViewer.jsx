import React from 'react'
import TcellDateTimePicker from 'tcelldatetimepicker'
import TcellButton from 'tcellbutton'

export default class DateTimeViewer extends React.Component {
    constructor(props) {       
        super(props);
        this.state = {
            dateValue: null,
            dateTimeValue: null
        }
        this.handleDateValueChange = this.handleDateValueChange.bind(this);
        this.handleDateTimeValueChange = this.handleDateTimeValueChange.bind(this);
    }

    handleDateValueChange(event) {             
        this.setState({
            dateValue: event.target.value            
        });
    }
    handleDateTimeValueChange(event) {                
        this.setState({
            dateTimeValue: event.target.value           
        });
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
                                <label style={{ marginTop: tenpx }}>Basic date picker:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellDateTimePicker
                                    label="Order Date"
                                    name="ORDER_DATE"
                                    showCalendar={true}
                                    showClock={false}
                                    onChange={ this.handleDateValueChange }
                                    value={this.state.dateValue}
                                />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ dateValue: "1971-04-25" }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set Date
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => {console.log(this.state.dateValue); }}
                                    style={{ marginRight: '10px' }}>
                                    Show Date
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ dateValue: null }) }}
                                    style={{ marginRight: '10px' }}>
                                    Clear
                                </TcellButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Date Time picker:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellDateTimePicker
                                    label="Shipment Date"
                                    name="SHIPMENT_DATE"
                                    showCalendar={true}
                                    showClock={true}
                                    onChange={ this.handleDateTimeValueChange }
                                    value={this.state.dateTimeValue}
                                />
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ dateTimeValue: "1998-09-12 13:45" }) }}
                                    style={{ marginRight: '10px' }}>
                                    Set DateTime
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { console.log(this.state.dateTimeValue); }}
                                    style={{ marginRight: '10px' }}>
                                    Show DateTime
                                </TcellButton>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellButton
                                    type="raised"
                                    color="primary"
                                    onClick={() => { this.setState({ dateTimeValue: null }) }}
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