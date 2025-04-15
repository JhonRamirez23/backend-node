import { Router } from 'express';
import { createRole, deleteRole, findRoles, findRolesById, updateRole } from '@controllers/rolesControllers';

const router = Router();

// Exporta las rutas
export default () => {
  router.post('/roles', createRole)
  router.get('/roles', findRoles);
  router.get('/roles/:id', async(req, res) => { await findRolesById(req, res)});
  router.put('/roles/:id', (req, res) => {updateRole});
  router.delete('/roles/:id', (req, res) => {deleteRole});

  return router; // Devuelve el enrutador con todas las rutas definidas
};
