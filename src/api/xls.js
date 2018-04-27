const xlsx = require('xlsx');
const path = require('path');
const axios = require('axios');
const http = axios.create({
  baseURL: '/api/', // api的base_url
  timeout: 50000, // 请求超时时间
  responseType: 'json',
  validateStatus(status) {
    return status >= 200 && status <= 500; // default
  },
});


module.exports.async = function fetch(dirname, key, xlsFileName, sheetsIndex = 0) {
  const workbook = xlsx.readFile(path.resolve(dirname, `./api/data/${xlsFileName}.xlsx`));
  return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetsIndex]]);
}

module.exports.httpGet = function httpGet(key, fileName) {
  http.get(fileName).then(res => {
    this[key] = res.data;
    // console.log(res)
  });
}