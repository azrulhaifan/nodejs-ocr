require('dotenv').config({path: __dirname + '/.env' })
var express = require('express'),
    router = express.Router();
const bodyParser = require('body-parser');
const ocr = require('../../modules/ocr');

router.use(function(req, res, next) {
  if (req.header('x-api-key') != process.env.APIKEY) {
    return res.status(401).json(
      { 
        success: false,
        message: "Authentication Failed !"
      }
    );
  }
  next();
});

router
  .use(bodyParser.json())

  .get('/', function(req, res){
    res.send({
        success: false,
        message: "There is Nothing Here !"
    });
  })
  .post('/ocr', ocr.do_ocr)

module.exports = router;