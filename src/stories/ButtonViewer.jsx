import React from 'react'
import TcellButton from 'tcellbutton'
import TcellIconButton from 'tcelliconbutton'
import AndroidIcon from 'material-ui-icons/Android'

export default class ButtonViewer extends React.Component {

    onClick = (e) => { };

    render() {
        let tenpx = '10px';
        let thinGrayBorder = 'solid 1px #eeeeee';          
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>1. Dynamic Icon:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <TcellButton
                                            type="raised"
                                            color="primary"
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}>
                                            Add New
                                        </TcellButton>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ borderTop: thinGrayBorder }}>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>2. Flat Button:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <TcellButton
                                            type="flat"
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Default
                                        </TcellButton>
                                        <TcellButton
                                            type="flat"
                                            color="primary"
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Primary
                                        </TcellButton>
                                        <TcellButton
                                            type="flat"
                                            color="secondary"
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Secondary
                                        </TcellButton>
                                        <TcellButton
                                            type="flat"
                                            disabled={true}
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            Disabled
                                        </TcellButton>

                                    </div>
                                    <div>
                                        <TcellIconButton
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            <AndroidIcon />
                                        </TcellIconButton>

                                        <TcellIconButton
                                            onClick={this.onClick.bind(this)}
                                            style={{ marginRight: '10px' }}
                                        >
                                            <AndroidIcon />
                                        </TcellIconButton>

                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ borderTop: thinGrayBorder }}>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>3. Raised Button:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <div>
                                    <TcellButton
                                        type="raised"
                                        onClick={this.onClick.bind(this)}
                                        style={{ marginRight: '10px' }}
                                    >
                                        <AndroidIcon />Add New
                                    </TcellButton>

                                </div>
                            </td>
                        </tr>
                        <tr style={{ borderTop: thinGrayBorder }}>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>4. Floating Action Button:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <div>
                                    <TcellButton
                                        type="floatingAction"
                                        onClick={this.onClick.bind(this)}
                                        style={{ marginRight: '10px' }}
                                    >
                                        <AndroidIcon />
                                    </TcellButton>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div >
        );
    }
}