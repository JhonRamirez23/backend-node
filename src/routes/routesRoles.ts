import { Router } from 'express';
import { createRole, deleteRole, findRoles, findRolesById, updateRole } from '@controllers/rolesControllers';

const router = Router();

// Exporta las rutas
router.post('/roles', createRole)
router.get('/roles', findRoles);
router.get('/roles/:id', findRolesById);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

export default router;
