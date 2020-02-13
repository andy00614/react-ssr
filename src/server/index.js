import express from "express";
import { render } from '../../utils'


const app = express();

app.use(express.static("public"));

app.get("*", function(req, res) {
  render(req,res)
});

const PORT = 7007;
app.listen(PORT);
