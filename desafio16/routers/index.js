import { Router } from 'express';

import auth from './auth.js'
import productosTest from './productosTest.js';
import mensajes from './mensajes.js'
import info from './info.js'
import randoms from './randoms.js'

const router = Router();

router.use('/', auth);
router.use('/productos-test', productosTest);
router.use('/mensajes', mensajes);
router.use('/info', info);
router.use('/randoms', randoms);

export default router;