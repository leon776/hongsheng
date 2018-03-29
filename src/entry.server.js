// entry.server.js
import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)
    // 设置路由
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({
          url: context.url,
          code: 404,
        })
      }
      // 执行asyncData方法，预拉取数据，暂时用不到
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            // store: store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        resolve(app);
      }).catch((e) => {
        reject(e);
      });
    }, (e) => {
      reject(e);
    });
  });
}
