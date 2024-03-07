import { Router } from 'express'
import { AddOneProduct, getProductById, updateProdById, deleteProdById, getAllProducts} from '../controllers/products.controller.js'
import { isAdminOrPremium, isJustAdmin} from '../middlewares/auth.middleware.js'

const productRouter = Router()


productRouter.get('/', getAllProducts)

productRouter.get('/:idProduct', getProductById)


productRouter.post('/', isAdminOrPremium, AddOneProduct)


productRouter.put('/:idProduct', isJustAdmin,  updateProdById)


productRouter.delete('/:idProduct', isAdminOrPremium, deleteProdById)


export default productRouter