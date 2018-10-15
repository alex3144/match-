import cloudinary from 'cloudinary';
import create from '../db/pictures/create'

export default function fileUploadMiddleware(req, res) {
  // console.log("IP: ", req.connection.remoteAddress)
    cloudinary.uploader.upload_stream(
      (result, error) => {
        console.log('BEFORE RES',result, error)
      create({url: result.secure_url}).then(result => {
        console.log('IN RES',result, error)
        res.send(result)
      })
    }).end(req.file.buffer);
}