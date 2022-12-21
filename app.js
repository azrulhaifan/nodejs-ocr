require('dotenv').config({path: __dirname + '/.env' })
const express = require('express')
const app = express()
const fs = require('fs')
const hard_host = "127.0.0.1"
const hard_port = 18127

const host = process.env.HOST || hard_host
const port = parseInt(process.env.PORT ?? hard_port)

app.listen(process.env.PORT, () => {
  console.log(`Voia running on port http://${host}:${port}`)

  fs.chmod('app.sock', 0777, function (err){
    if(err){
      console.log(err);
    }else{
      console.log('App Sock Enabled');
    }
  })
})

// ROUTE DEFINITION
var webRoutes = require('./routes/web');

// ROUTE USE INIT
app.use('/', webRoutes);

// HANDLE CLOSING 
process.stdin.resume();//so the program will not close instantly

function exitHandler(options, exitCode) {
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();

    fs.unlinkSync('app.sock')
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));