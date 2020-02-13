import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import { Provider } from "react-redux";
import {getStore} from "../store";

const store = getStore();

export function render(req, res) {
  // todo:在这里拿到store的数据
  // 根据不同路径加载不同的数据
  // 只做静态加载，动态交互还是需要客户端渲染

  const matchedRouter = matchRoutes(routes, req.path);
  const promises = [];
  matchedRouter.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(_ => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </StaticRouter>
      </Provider>
    );

    res.send(`<html>
    <head>
        <title>ssr</title>
        <body>
          <h2>hello ssr</h2>
          <div id="root">${content}</div>
          <script>
            window.ctx = ${JSON.stringify(store.getState())}
          </script>
          <script src="/index.js"></script>
        </body>
      </head>
    </html>`);
  });
}
