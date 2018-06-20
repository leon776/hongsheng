const xlsx = require('xlsx');
const path = require('path');
const axios = require('axios');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const http = axios.create({
  baseURL: '/api/', // api的base_url
  timeout: 50000, // 请求超时时间
  responseType: 'json',
  validateStatus(status) {
    return status >= 200 && status <= 500; // default
  },
});


module.exports.async = function fetch(dirname, key, xlsFileName, sheetsIndex = 0, row = undefined) {
  const fileKey = path.resolve(dirname, `./api/data/${xlsFileName}.xlsx`);
  const cacheKey = `${fileKey}-${sheetsIndex}-${row}`;
  const cache = myCache.get(cacheKey);
  if(cache) {
    return cache;
  } else {
    const workbook = xlsx.readFile(fileKey);
    const res = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetsIndex]]);
    myCache.set(cacheKey, res);
    return res;
  }
}

module.exports.httpGet = function httpGet(key, fileName) {
  http.get(fileName).then(res => {
    this[key] = res.data;
    // console.log(res)
  });
}