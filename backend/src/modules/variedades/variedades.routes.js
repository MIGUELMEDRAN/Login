import { Router } from 'express';
import {
  getVariedadesController,
  createVariedadController,
  updateVariedadController,
  deleteVariedadController
} from './variedades.controller.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';

const router = Router();

router.use(authMiddleware);
router.get('/', getVariedadesController);
router.post('/', createVariedadController);
router.put('/:id', updateVariedadController);
router.delete('/:id', deleteVariedadController);

export default router;
