//require in excel4node library
const excel = require('excel4node');

//create an instand of a workbook
const workbook = new excel.Workbook();

//add sheets to the workbook
const dometicStandard = workbook.addWorksheet('Domestic Standard Rates');
const domesticExpedited = workbook.addWorksheet('Domestic Expedited Rates');
const domesticNextDay = workbook.addWorksheet('Domestic Next Day Rates'); 
const intEconomy = workbook.addWorksheet('International Economy Rates');
const intExpedited = workbook.addWorksheet('International Expediated Rates');

//style to ensure number formatting is correct
const dataStyle = workbook.createStyle({
  numberFormat: '#,##0.00'
})