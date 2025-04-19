import { createReport, deleteReport, findById, findReports, updateReport } from '@controllers/reportControllers';
import { Router } from 'express';

const router = Router();

// Exporta las rutas
router.get('/game/findReports', findReports);
router.get('/game/findReport/:id', findById);
router.post('/game/reportGame', createReport);
router.put('/game/updateReport/:id', updateReport);
router.delete('/game/deleteReport/:id', deleteReport);

export default router;