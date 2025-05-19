"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facility_controller_1 = require("../controllers/facility.controller");
const router = (0, express_1.Router)();
router.get('/', facility_controller_1.getFacility);
router.get('/:id', facility_controller_1.getFacilityById);
router.get('/name/:name', facility_controller_1.getFacilityByName);
exports.default = router;
