require('dotenv').config({path: __dirname + '/.env' })
const express = require('express')
const app = express()
const hard_host = "127.0.0.1"
const hard_port = 18127

const host = process.env.HOST || hard_host
const port = parseInt(process.env.PORT ?? hard_port)

app.listen(process.env.PORT, () => {
  console.log(`Voia running on port http://${host}:${port}`)
})

// ROUTE DEFINITION
var webRoutes = require('./routes/web');

// ROUTE USE INIT
app.use('/', webRoutes);