const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const server = new express()
const { createBundleRenderer } = require('vue-server-renderer')
const templateHtml = require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')

let distPath = '../dist'
let port = 3000

server.use('/static', express.static(path.join(__dirname, '../dist/static')))
server.use(cookieParser())

const renderer = createBundleRenderer(require(`${distPath}/vue-ssr-bundle.json`), { 
  runInNewContext: false,
  template: templateHtml, 
  // clientManifest: require(`${distPath}/vue-ssr-client-manifest.json`) 
})

// 在服务器处理函数中……
server.get('*', (req, res) => {
  const context = {
    url: req.url,
    lang: req.cookies.lang || 'zh',
  }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    if (err) {
      console.log(err)
      res.status(404)
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