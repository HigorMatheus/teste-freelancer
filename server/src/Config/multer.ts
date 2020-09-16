import multer from 'multer'
import crypto from 'crypto'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: (req, file, callback)=>{
            callback(null, path.resolve(__dirname, '..', '..','uploads'));
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
            //   if (err) callback(err);
      
             const filename = `${hash.toString("hex")}-${file.originalname}`;
      
              callback(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
      },
}