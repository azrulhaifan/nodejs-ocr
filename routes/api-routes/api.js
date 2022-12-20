var express = require('express'),
    router = express.Router();
const bodyParser = require('body-parser');
const ocr = require('../../modules/ocr');

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