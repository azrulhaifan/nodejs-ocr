const express = require('express')
const app = express()
const host = "127.0.0.1"
const port = 18127

app.listen(port, host, () => {
  console.log(`Voia running on port http://${host}:${port}`)
})

// ROUTE DEFINITION
var webRoutes = require('./routes/web');

// ROUTE USE INIT
app.use('/', webRoutes);