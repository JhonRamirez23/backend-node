import { Router } from 'express';
import { loginUser, registerUser } from '@controllers/auth/authControllers';

const router = Router();

// Exporta las rutas
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

export default router;
