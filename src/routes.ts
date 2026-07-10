import { Router } from "express";
import * as nomesController from "./controllers/nomes-controller";


const router = Router();

router.get('/nome', nomesController.getNomes);
router.get('/nome/:id', nomesController.getNomesById);
router.post('/nome/', nomesController.createNome);
router.patch('/nome/:id', nomesController.updateNome);
router.delete('/nome/:id', nomesController.deleteNome);


export default router;