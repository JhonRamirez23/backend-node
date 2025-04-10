import { RolesRepository } from '@repositories/rolesRepository';
import { RolesService } from '@services/RolesService';
import { Router } from 'express';
import { IRolesRepository, IRolesService } from 'types/RolesTypes';

const router = Router();

// Inyección de dependencias necesarias para las rutas
const rolesRepository: IRolesRepository = new RolesRepository();
const rolesService: IRolesService = new RolesService(rolesRepository);

// Exporta las rutas
export default () => {
  // Post
  router.post('/roles', async(req, res) => {
    const newRole = await rolesService.createRoles(req.body); // Crea un nuevo rol con los datos del cuerpo de la solicitud
    res.status(201).json(newRole); // Devuelve un mensaje de éxito al crear un rol
  })

  // Get
  router.get('/roles', async (req, res) => {
    try {
      const roles = await rolesService.findRoles();
      res.status(200).json(roles); // Devuelve todos los roles
    } catch (err) {
      res.status(500).json({ message: 'Error fetching roles', error: err }); // Maneja errores
    }
  });

  // Get by ID
  router.get('/roles/:id', async(req, res) => {
    try {
      const roleId = await rolesService.findRolesById(req.params.id);
      res.status(200).json(roleId); // Devuelve el rol por ID
    } catch (err) {
      res.status(500).json({ message: 'Error fetching role by ID', error: err }); // Maneja errores
    }
  });

  // Put
  router.put('/roles/:id', async(req, res) => {
    try {
      const updateRole = await rolesService.updateRoles(req.params.id, req.body); // Actualiza el rol con los datos del cuerpo de la solicitud
      res.status(200).json(updateRole); // Devuelve el rol actualizado
    } catch (err) {
      res.status(500).json({ message: 'Error updating role', error: err }); // Maneja errores
    }
  });

  // Delete
  router.delete('/role/:id', async(req, res) => {
    try {
      const deleteRole = await rolesService.deleteRoles(req.params.id);// Elimina el rol por ID
      res.status(200).json(deleteRole); // Devuelve un mensaje de éxito al eliminar el rol
    } catch (err) {
      res.status(500).json({ message: 'Error deleting role', error: err }); // Maneja errores
    }
  });

  return router; // Devuelve el enrutador con todas las rutas definidas
};
