import { Router } from "express";
import { getFacility, getFacilityById, getFacilityByName } from "../controllers/facility.controller";

const router = Router()

router.get('/', getFacility)
router.get('/:id', getFacilityById)
router.get('/name/:name', getFacilityByName)

export default router;
