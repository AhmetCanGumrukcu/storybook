import React from 'react'
import TcellDialog from 'tcelldialog'
import TcellButton from 'tcellbutton'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import cityDialog from '../constants/CityDialog';

export default class DialogViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageOpen: null,
            cityOpen: null
        }
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
                                
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                            <TcellButton
                                            type="raised"
                                            color="primary"
                                            onClick={()=> this.setState({messageOpen: true})}
                                            style={{ marginRight: '10px' }}>
                                            Show message
                                        </TcellButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                            <TcellButton
                                            type="raised"
                                            color="accent"
                                            onClick={()=> this.setState({cityOpen: true})}
                                            style={{ marginRight: '10px' }}>
                                            Show dialog
                                        </TcellButton>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <TcellDialog name="messageDialog" title="Dikkat!"
                    open={this.state.messageOpen}>
                    <DialogContent>
                        <span>"Satıcı No gerekliliği değişsin mi?"</span>
                    </DialogContent>
                    <DialogActions>
                        <TcellButton
                            type="flat"
                            color="primary"
                            onClick={() => this.setState({ messageOpen: false })}>
                            OK
                        </TcellButton>
                        <TcellButton
                            type="flat"
                            color="accent"
                            onClick={() => this.setState({ messageOpen: false })}>
                            Cancel
                        </TcellButton>
                    </DialogActions>
                </TcellDialog>

                <TcellDialog name="cityDialog" title=" Şehir Seçiniz "
                    open={this.state.cityOpen}>
                    <DialogContent>
                        {cityDialog}
                    </DialogContent>
                    <DialogActions>
                    <TcellButton
                            type="flat"
                            color="primary"
                            onClick={() => this.setState({ cityOpen: false })}>
                            OK
                        </TcellButton>
                        <TcellButton
                            type="flat"
                            color="accent"
                            onClick={() => this.setState({ cityOpen: false })}>
                            Cancel
                        </TcellButton>
                    </DialogActions>
                </TcellDialog>

            </div >
        );
    }
}