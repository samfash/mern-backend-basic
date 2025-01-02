import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req: any, file: any, cb: any) => {
  //   const allowedExtensions = /jpeg|jpg|png/;
  //   const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  //   const mimetype = allowedExtensions.test(file.mimetype);
  
  //   if (extname && mimetype) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("Only image files are allowed!"));
  //   }
  // };

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedMimeTypes.includes(file.mimetype)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
  
  // Initialize multer
  const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Max file size: 2MB
    fileFilter,
  });
  
  export default upload;