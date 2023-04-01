const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => { //cb is call back
        let fileDestination = 'public/uploads/';
        // check if directory exists
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true });

        }
        cb(null, fileDestination);
    },
    filename: (req, file, cb) => {
        let extname = path.extname(file.originalname);
        let filename = path.basename(file.originalname, extname);
        // path.basename('images/foo/abc.jpg','.jpg') returns 'abc' 
        cb(null, filename + '_' + Date.now() + extname);
    }
});

let imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg|svg|jfif|gif|JPG|PNG|SVG|PNGJFIF|GIF)$/)) {
        return cb(new Error('You can upload image file only'), false);
    }
    else {
        cb(null, true);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: {
        fileSize: 3*1024*1024 // 3 MB
    }
})

// module.export = upload; // if you mis-spell like this then you will have a headache
module.exports = upload;