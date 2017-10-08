import React from 'react'
import TcellCheckbox from 'tcellcheckbox'

export default class CheckboxViewer extends React.Component {
   
    render() {
        let tenpx = '10px';
        let thinGrayBorder = 'solid 1px #eeeeee';
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Basic checkbox:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellCheckbox label="Ülke zorunlu" />
                            </td>
                        </tr>     
                    </tbody>
                </table>
            </div >
        );
    }
}