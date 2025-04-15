import { Router } from 'express';
import { createUser, deleteUser, findById, findUsers, updateUser } from '@controllers/usersControllers';

const router = Router();

// Exporta las rutas
export default () => {
  router.post('/users', createUser); // Crea un nuevo usuario con los datos del cuerpo de la solicitud
  router.get('/users', findUsers); // Devuelve todos los usuarios
  router.get('/users/:id', async(req, res) => {await findById(req, res)}); // Devuelve un usuario específico por ID
  router.put('/users/:id', (req, res) => {updateUser}); // Actualiza un usuario específico por ID
  router.delete('/users/:id', (req, res) => {deleteUser}); // Elimina un usuario específico por ID

  return router; // Devuelve el enrutador con todas las rutas definidas
};