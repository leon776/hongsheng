// entry.server.js
import { createApp } from './app'

export default context => {
  const { app, router } = createApp(context)
  // 设置路由
  router.push(context.url)

  return new Promise((resolve, reject) => {
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      
      if (!matchedComponents.length) {
        return reject({
          url: context.url,
          code: 404,
        })
      } else {
        resolve(app);
      }
    }, (e) => {
      reject(e);
    });
  });

}
