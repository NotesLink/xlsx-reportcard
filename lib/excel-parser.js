var arr = [];
var parseExcel = function (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
        workbook.SheetNames.forEach(function (sheetName) {
            arr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            arr.forEach(renderData);
        });
    }
    reader.onerror = function (err) {
        console.log(err);
    };
    reader.readAsBinaryString(file);
};