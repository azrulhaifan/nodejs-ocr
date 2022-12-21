const { createWorker }  = require('tesseract.js');

// const worker = createWorker({
//     langPath: path.join(__dirname, '..', 'lang-data'), 
//     logger: m => console.log(m),
// });

async function main(req, res) {
    if (req.body.image_url == null) {
        res.send({
            success: false,
            message: "Please fill out all required parameter !"
        });
    } else {
        try {
            const worker = await createWorker({
                logger: m => console.log(m),
            }); 

            await worker.loadLanguage('ind');
            await worker.initialize('ind');

            let image_url = req.body.image_url;
            // const { data: { text } } = await createWorker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
            const { data: { text } } = await worker.recognize(image_url);
            // console.log(text);

            await worker.terminate();

            res.send({
                success: true,
                message: "All Ok OCR Complete",
                data : text
            });
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
    do_ocr_js: (req, res) => {
        main(req, res)
    }
}