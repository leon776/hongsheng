const xlsx = require('xlsx');
const path = require('path');

export function fetch(xlsFileName, sheetsIndex = 0) {
  const workbook = xlsx.readFile(path.resolve(__dirname, `./data/${xlsFileName}.xlsx`));
  return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetsIndex]]);
}