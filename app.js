const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Voia running on port ${port}`)
})

// ROUTE DEFINITION
var webRoutes = require('./routes/web');

// ROUTE USE INIT
app.use('/', webRoutes);