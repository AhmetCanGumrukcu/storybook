import React from 'react'
import TcellCard from 'tcellcard'

export default class CardViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true
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
                                <label style={{ marginTop: tenpx }}>Basic card:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellCard title="This is title..." />
                            </td>
                        </tr>

                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Card with subtitle:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellCard
                                    title="This is title..."
                                    subtitle="My sub title..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Card with content:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellCard
                                    title="This is title..."
                                    subtitle="My sub title..."
                                    expandable={false}
                                >
                                    <p>
                                        Hello from storybook card...
                                    </p>
                                    <p>
                                        It's fun, isn't it?
                                    </p>

                                </TcellCard>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: 'top', borderRight: thinGrayBorder, paddingRight: tenpx, paddingTop: tenpx, paddingBottom: tenpx }}>
                                <label style={{ marginTop: tenpx }}>Collapsible card:</label>
                            </td>
                            <td style={{ paddingTop: tenpx, paddingBottom: tenpx, paddingLeft: tenpx }}>
                                <TcellCard
                                    title="Card..."
                                    subtitle="collapsible..."
                                    expandable={true}
                                    expanded={false}
                                    
                                >
                                    <p>
                                        Hello from storybook card...
                                    </p>
                                    <p>
                                        It's fun, isn't it?
                                    </p>

                                </TcellCard>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div >
        );
    }
}