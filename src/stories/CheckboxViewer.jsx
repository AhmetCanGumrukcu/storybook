import React from 'react'
import TcellCheckbox from 'tcellcheckbox'

export default class CheckboxViewer extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            isSelected: true,
            error: null
        }
    }

    handleChange(event){      
        this.setState({
            isSelected: event.target.value
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
                                <label style={{ marginTop: tenpx }}>Basic checkbox:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                               
                                <TcellCheckbox value={ this.state.isSelected }  
                                    value={ this.state.isSelected }
                                    error={ this.state.error }                                     
                                    onChange={ this.handleChange }  
                                    label="Karaliste" 
                                    name="BLACKLIST" 
                                    onToggle={() => console.log(`isSelected : ${this.state.isSelected}`)}/>
                            </td>
                        </tr>     
                    </tbody>
                </table>
            </div >
        );
    }
}