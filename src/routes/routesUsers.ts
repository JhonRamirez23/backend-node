import { Router } from 'express';
import { IUserRepository, IUserService, User } from 'types/UsersTypes';
import { UserRepository } from '@repositories/userRepository';
import { UserService } from '@services/UserService';

const router = Router();

// Inyecta las dependencias necesarias para las rutas
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export default () => {
  // Crea un nuevo usuario | Create
  router.post('/users', async(req, res) => {
    try {
      const newUser = req.body;
      const result = await userRepository.create(newUser);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: 'Error creating user', error: err });
    }
  });

  // Define una ruta para obtener todos los usuarios | Read
  router.get('/users', async(req, res) => {
    try {
      const users = await userRepository.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users', error: err });
    }
  });

  // Define una ruta para obtener un usuario por ID | Read
  router.get('/users/:id', async(req, res) => {
    try {
      const userId = await userRepository.findById(req.params.id);
      res.status(200).json(userId);
    } catch (err) {
      res.status(404).json({ message: 'User not found', error: err });
    }
  });

  // Actualiza un usuario por ID | Update
  router.put('/users/:id', async(req, res) => {
    try {
      const UpdateUser = await userRepository.update(req.params.id, req.body);
      res.status(200).json(UpdateUser);
    } catch (err) {
      res.status(404).json({ message: 'User not found', error: err });
    }
  });

  // Elimina un usuario por ID | Delete
  router.delete('/users/:id', async(req, res) => {
    try {
      const userId = await userRepository.delete(req.params.id);
      res.status(200).json(userId);
    } catch (err) {
      res.status(404).json({ message: 'User not found', error: err });
    }
  });

  return router;
};