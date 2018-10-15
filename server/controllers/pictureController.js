import multer from 'multer';
import cloudinary from 'cloudinary';
import pictureUploadMiddleware from '../services/picture';

/* your servrer init and express code here */

cloudinary.config({
  cloud_name: 'doz5mtpla',
  api_key: '551379139732155',
  api_secret: 'IVsKyirZVud5E9kljng9iskbVEE',
});


const storage = multer.memoryStorage();
const upload = multer({ storage });

export const controller = (app) => {
	app.post('/pictures', upload.single('file'), pictureUploadMiddleware);
}