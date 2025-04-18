import { Router } from 'express';
import { createUser, deleteUser, findById, findUsers, updateUser } from '@controllers/usersControllers';

const router = Router();

// Exporta las rutas
router.post('/users', createUser); // Crea un nuevo usuario con los datos del cuerpo de la solicitud
router.get('/users', findUsers); // Devuelve todos los usuarios
router.get('/users/:id', findById); // Devuelve un usuario específico por ID
router.put('/users/:id', updateUser); // Actualiza un usuario específico por ID
router.delete('/users/:id', deleteUser); // Elimina un usuario específico por ID

export default router;