const xlsx = require('xlsx');
const path = require('path');

export function fetch(dirname, xlsFileName, sheetsIndex = 0) {
  const workbook = xlsx.readFile(path.resolve(dirname, `./api/data/${xlsFileName}.xlsx`));
  return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetsIndex]]);
}