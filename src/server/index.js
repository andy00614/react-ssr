import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";
import Routes from "../../Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const reducer = (state = { name: "andy" }, action) => {
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

const app = express();

app.use(express.static("public"));

app.get("*", function(req, res) {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  res.send(`<html>
    <head>
      <title>ssr</title>
      <body>
        <h2>hello ssr</h2>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </head>
  </html>`);
});

const PORT = 7005;
const server = app.listen(7005, () => {
  console.log("server start at " + PORT);
});
