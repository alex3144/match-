import cloudinary from 'cloudinary';
import create from '../db/pictures/create'

export default function fileUploadMiddleware(req, res) {
  // console.log("IP: ", req.connection.remoteAddress)
    cloudinary.uploader.upload_stream(
      (result) => {
      create({url: result.secure_url}).then(result => {
        res.send(result)
      })
    }).end(req.file.buffer);
}