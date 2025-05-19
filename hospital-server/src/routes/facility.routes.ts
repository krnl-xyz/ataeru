import { Router } from "express";
import { getFacility, getFacilityById, getFacilityByName, verifyFacilityById } from "../controllers/facility.controller";

const router = Router()

router.get('/', getFacility)
router.get('/:id', getFacilityById)
router.get('/name/:name', getFacilityByName)
router.get('/verify/:id', verifyFacilityById)

export default router;
