const express = require('express')
const app = express()
const hard_host = "127.0.0.1"
const hard_port = 18127

const {
	NODE_ENV,
	PORT,
	HOST,
} = process.env;

app.listen(PORT ? PORT : hard_port, () => {
  app.currentServer = {
		host: HOST ? HOST : hard_host,
		port: PORT ? PORT : hard_port,
	};

  console.log(`Voia running on port http://${HOST}:${PORT}`)
})

// ROUTE DEFINITION
var webRoutes = require('./routes/web');

// ROUTE USE INIT
app.use('/', webRoutes);