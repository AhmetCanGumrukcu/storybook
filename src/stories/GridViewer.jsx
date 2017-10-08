import React from 'react'
import TDataGrid from '../../components/ui/datagrid/t-data-grid'

class FormViewer extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});
    onClick = (e) => {};
    handleCancel = (e) => {};
    handleSubmit = (e) => {};
    render() {
        return (
            <article className="article">
                <h2 className="article-title">Turkcell Data Grid</h2>
                <div className="box box-default">
                    <div className="box-body padding-xl">
                        <TDataGrid 
                            options={{
                                dataSource: {
                                    type: "odata",
                                    transport: {
                                        read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                                    },
                                    pageSize: 20
                                },
                                height: 550,
                                groupable: true,
                                sortable: true,
                                resizable: true,
                                reorderable: true,
                                persistSelection: true,
                                navigatable: true,
                                pageable: {
                                    refresh: true,
                                    pageSizes: true,
                                    buttonCount: 5
                                },
                                columns: [
                                {
                                    field: "ContactName",
                                    title: "Contact Name",
                                    width: 240
                                }, {
                                    field: "ContactTitle",
                                    title: "Contact Title"
                                }, {
                                    field: "CompanyName",
                                    title: "Company Name"
                                }, {
                                    field: "Country",
                                    width: 150
                                }]
                            }}
                        />
                    </div>
                </div>
            </article>
        );
    }
}
export default FormViewer;