import express from 'express'
import ProductController from './Controllers/ProductController'
const routes = express.Router()

routes.get('/', ProductController.index)
routes.post('/product', ProductController.create)

export default routes