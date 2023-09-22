const path = require('path');
const multer = require('multer');
const storageProduts = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        if (path.extname(file.fieldname) != '.jpg') {
            fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `Error con el formato de archivo - ${file.fieldname}\n`)            
        }
        cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storageProduts });
module.exports = upload;
