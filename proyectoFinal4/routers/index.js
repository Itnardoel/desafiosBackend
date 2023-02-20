import { Router } from 'express';

import productsRouter from './productsRouter.js'
import cartsRouter from './cartsRouter.js'

const router = Router();

router.use('/productos', productsRouter);

router.use('/carrito', cartsRouter);

// router.use('/', auth);

// router.use('/chat', chatsRouter)

export default router;