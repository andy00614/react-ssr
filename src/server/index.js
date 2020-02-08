import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import Home from "../container/Home";

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  const dom = renderToString(<Home />);
  res.send(`<html>
    <head>
      <title>ssr</title>
      <body>
        <h2>hello ssr</h2>
        <div id="root">${dom}</div>
        <script src="/index.js"></script>
      </body>
    </head>
  </html>`);
});

const PORT = 7005;
const server = app.listen(7005, () => {
  console.log("server start at " + PORT);
});
