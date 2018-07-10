# hongsheng

> ssr

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

项目结构说明：

数据：采用同步读取xlsx之后转换为json的形式，文件都在/src/api/data/里面的xlsx文件里，客户提供新的xlsx以后覆盖即可
语言切换：通过cookie控制，例：this.body[this.lang]来读取指定的key
pc/移动切换，node判断，传入ssrContext中来切换路由组件，使用webpack动态路由分析功能实现

测试环境地址：

123.207.232.183 root/@#*16..$^%zj$#*&

目录/data/www/hongsheng/dist/
部署后pm2重启即可，pm2 restart ${id} 或 pm2 start server.js