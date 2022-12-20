const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng", // default
  oem: 3,
  psm: 3,
}

async function main(req, res) {
    if (req.body.image_url == null) {
        res.send({
            success: false,
            message: "Please fill out all required parameter !"
        });
    } else {
        try {
            let image_url = req.body.image_url;
            let ocr_text = await tesseract.recognize(image_url);

            res.send({
                success: true,
                message: "All Ok OCR Complete",
                data : ocr_text
            });
    
            // const text = await tesseract.recognize("image.jpg", config)
            // console.log("Result:", text)
        } catch (error) {
            res.send({
                success: false,
                message: "OCR Failed",
                data: error
            });
        }
    }
}

module.exports = {
    do_ocr: (req, res) => {
        main(req, res)
    }
}