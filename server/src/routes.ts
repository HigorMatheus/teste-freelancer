import express from 'express'
import multer from 'multer'
import multerConfig from './Config/multer'
import ProductController from './Controllers/ProductController'

const Uploads = multer(multerConfig);
const routes = express.Router()

routes.get('/product', ProductController.index)
routes.get('/product/:id', ProductController.show)
routes.post('/product', Uploads.single('image') , ProductController.create)
routes.delete('/product/:id', ProductController.destroy)
routes.put('/product/:id',Uploads.single('image'), ProductController.update)

export default routes