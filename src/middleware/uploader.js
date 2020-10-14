const multer = require("multer");
const path = require("path");
var fs = require("fs");
var dir = "uploads";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log("dir created");
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
