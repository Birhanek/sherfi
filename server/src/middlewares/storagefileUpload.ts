
import multer from 'multer'
import { Response, Request } from 'express'
import { NotAllowedError } from '../helpers/apiErrors'

const MAX_FILE_SIZE = Math.pow(1024, 2) * 1
const whiteList = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

const profilePhoto = multer.diskStorage({
    destination:(req:Request, file,cb) =>{
        cb(null,'public/images/profile')
    },
    filename:(req:Request,file,cb) => {
        const suffix = Date.now() + '-'+ Math.round(Math.random() * 1e9)
        cb(null,suffix + '-'+ file.originalname)
    },
})

const postPhoto = multer.diskStorage({
    destination:(req:Request,file,cb)=>{
        cb(null,'public/images/post')
    },
    filename:(req:Request,file,cb) =>{
        const suffix = Date.now() + '-'+ Math.round(Math.random() * 1e9)
        cb(null,suffix +'-'+ file.originalname)
    }
})

// what type of file can accept
const fileType = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    if (!whiteList.includes(file.mimetype)) {
      return cb(new NotAllowedError('File Not Allowed'))
    }
    return cb(null, true)
  }

// profile image upload 

const profileUpload = multer({
    storage:profilePhoto,
    limits:{fileSize:MAX_FILE_SIZE},
    fileFilter:fileType
})

// post image upload
const postUpload =multer({
    storage:postPhoto,
    limits:{fileSize:MAX_FILE_SIZE},
    fileFilter:fileType
})

export default{
    profileUpload,
    postUpload
}