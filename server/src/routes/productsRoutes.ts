import { Router } from 'express';
import { createProduct, getProducts } from '../controller/productsController';

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);

export default router;