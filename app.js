const express = require('express')
const app = express()

app.get('/',function(req,res) {
  res.send(`<html>
    <head>
      <title>ssr</title>
      <body>
        <h2>hello ssr</h2>
      </body>
    </head>
  </html>`)
})

const server = app.listen(7005)