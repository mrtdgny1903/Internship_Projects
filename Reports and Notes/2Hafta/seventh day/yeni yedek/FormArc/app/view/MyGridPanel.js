Ext.define('MyApp.view.MyGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',

    requires: [
        'MyApp.view.MyGridPanelViewModel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table'
    ],

    viewModel: {
        type: 'mygridpanel'
    },
    height: 300,
    id: 'mygrid',
    width: 900,
    title: 'My Grid Panel',
    margin : "-200 10 10 0",

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'string',
            text: 'id'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'string',
            text: 'Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'string',
            text: 'Last Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'string',
            text: 'Condition'
        },

    ]

});