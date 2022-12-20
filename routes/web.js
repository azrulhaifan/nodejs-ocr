var express = require('express'),
    router = express.Router();

var apiRoutes = require('./api-routes/api');

router
  // Add a binding to handle '/'
  .get('/', function(req, res){
    res.send("There is Nothing Here !")
  })

  // Import my automated routes into the path '/api'
  // This works because we're already within the '/' route 
  // so we're simply appending more routes to the '/' endpoint
  .use('/api', apiRoutes);
 
module.exports = router;