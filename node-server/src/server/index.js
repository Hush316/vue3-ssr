import { createPinia } from 'pinia';
import { createMemoryHistory } from 'vue-router'; //内存路由,在node中使用
import { renderToString } from 'vue/server-renderer';
import createApp from '../app';
import createRouter from '../router';
let express = require('express')

let server = express()

//部署静态资源
server.use(express.static("build"))

server.get('/*', async (req, res) => {
  let app = createApp()

  // 安装路由插件
  let router = createRouter(createMemoryHistory())
  app.use(router)
  await router.push(req.url || '/')
  await router.isReady() //等待异步路由加载完成,再渲染页面

  // 安装pinia插件
  let pinia = createPinia()
  app.use(pinia)

  let appStringHtml = await renderToString(app)

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <h1>App</h1>
    <div id="app">
      ${appStringHtml}
    </div>
    <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `
  )
})

server.listen(3000, () => {
  console.log('start node server on 3000~');
})


