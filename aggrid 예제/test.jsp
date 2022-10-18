<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <script src="https://unpkg.com/ag-grid/dist/ag-grid.min.js"></script>
    <script>
        var columnDefs = [
    {headerName:"Athlete", field: "athlete", width: 150, minWidth:120, pinned:'left', suppressSizeToFit: true, suppressMenu: true, sort: 'asc'},
    {headerName:"Age", field: "age", width: 90, minWidth: 50, maxWidth: 100, pinned:'left', suppressMenu: true, suppressSorting : true},
    {headerName:"Country", field: "country", width: 120},
    {headerName:"Year", field: "year", width: 90},
    {headerName:"Date", field: "date", width: 110},
    {headerName:"Sport", field: "sport", width: 110},
    {headerName:"Gold Medal", field: "gold", width: 100},
    {headerName:"Silver Medal", field: "silver", width: 100},
    {headerName:"Bronze Medal", field: "bronze", width: 100},
    {headerName:"Total", field: "total", width: 100}
];
var gridOptions = {
    defaultColDef: {
        sortable: true,
        resizable: true
    },
    debug: true,
    columnDefs: columnDefs,
    rowData: null,
    onGridReady: function() {
        gridOptions.api.addGlobalListener(function(type, event) {
            if (type.indexOf('column') >= 0) {
                console.log('Got column event: ', event);
            }
        });
    }
};
document.addEventListener('DOMContentLoaded', function() {
    // div id 설정
    var gridDiv = document.querySelector('#myGrid'); 
    // ag-grid 생성     
    new agGrid.Grid(gridDiv, gridOptions); 
 
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            // 데이터 삽입
            gridOptions.api.setRowData(httpResult); 
        }
    };
});


        


    </script>
</head>
<body>
    <div class="grid-wrapper">
        <div style="width: 100%; height:580px" id="myGrid" class="ag-grid-div ag-theme-balham ag-basic"></div>
    </div>
    
    
</body>
</html>