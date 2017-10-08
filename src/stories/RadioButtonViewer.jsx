import React from 'react'
import TcellRadioGroup from 'tcellradiogroup'
import { FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';

export default class InputViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transport: null
        };
    }

    transportChange = (event) => {       
        this.setState({
            transport: event.target.value
        })
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
                                <label style={{ marginTop: tenpx }}>Basic radio group:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellRadioGroup value={this.state.transport} label="Ulaşım şekli" onChange={this.transportChange}>
                                    <FormControlLabel value="kara" control={<Radio />} label="Kara" />
                                    <FormControlLabel value="hava" control={<Radio />} label="Hava" />
                                    <FormControlLabel value="deniz" control={<Radio />} label="Deniz" disabled />
                                </TcellRadioGroup>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div >
        );
    }
}