import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

const store = getStore();

export function render(req) {
  // todo:在这里拿到store的数据
  // 根据不同路径加载不同的数据
  // 只做静态加载，动态交互还是需要客户端渲染

  const matchRouter = [];
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) {
      matchRouter.push(route);
    }
  });
  
  console.log(matchRouter);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </StaticRouter>
    </Provider>
  );
  return `<html>
  <head>
      <title>ssr</title>
      <body>
        <h2>hello ssr</h2>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </head>
  </html>`;
}
