import React from 'react'
import TcellDataFieldButton from 'tcelldatafieldbutton'

export default class DataFieldButtonViewer extends React.Component {
   
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
                                <TcellDataFieldButton label="Ülke" />
                            </td>
                        </tr>                      
                        
                    </tbody>
                </table>
            </div >
        );
    }
}