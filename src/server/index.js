import express from "express";
import { render } from '../../utils'


const app = express();

app.use(express.static("public"));

app.get("*", function(req, res) {
  const content = render(req)
  res.send(content);
});

const PORT = 7005;
const server = app.listen(7005, () => {
  console.log("server start at " + PORT);
});
