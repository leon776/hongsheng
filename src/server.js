const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const templateHtml = require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
const { async } = require("./api/xls");
const server = new express()

let distPath = '.'
let port = 3000

server.use('/static', express.static(path.join(__dirname, `${distPath}/static`)))
server.use(cookieParser())

const renderer = createBundleRenderer(require(`${distPath}/vue-ssr-bundle.json`), { 
  runInNewContext: false,
  template: templateHtml, 
  // clientManifest: require(`${distPath}/vue-ssr-client-manifest.json`) 
})

// api
server.get('/api/*', (req, res) => {
  const json = async(__dirname, undefined, req.params[0]);
  if(json) {
    res.status(200)
    res.type = 'text/json; charset=utf-8'
    res.json(json)
    res.end()
  } else {
    res.status(404)
    res.end()
  }
});
// 页面
server.get('*', (req, res) => {
  const context = {
    url: req.url,
    lang: req.cookies.lang || 'zh',
    dirname: __dirname,
    state: {},
  }
  // bundle renderer 在调用 renderToString 时，它将自动执行「由 bundle 创建的应用程序实例」所导出的函数（传入上下文作为参数），然后渲染它
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    if (err) {
      console.log(err)
      res.status(500)
      res.end()
    }
    res.status(200)
    res.type = 'text/html; charset=utf-8'
    res.end(html)
  })
})

// 错误处理
server.on('error', function (err) {
  console.log(err)
})

server.listen(port, () => {
  console.log(`[info]: server is deploy on port: ${port}`)
})