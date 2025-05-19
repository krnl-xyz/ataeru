"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFacility = exports.getFacilityByName = exports.getFacilityById = exports.getFacility = void 0;
const db_1 = require("../config/db");
const getFacility = async (req, res, next) => {
    try {
        const facilities = await db_1.prisma.hospitalInformation.findMany();
        res.status(200).json(facilities);
    }
    catch (error) {
        next(error);
    }
};
exports.getFacility = getFacility;
const getFacilityById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const facility = await db_1.prisma.hospitalInformation.findUnique({ where: { id: parseInt(id) } });
        res.status(200).json(facility);
    }
    catch (error) {
        next(error);
    }
};
exports.getFacilityById = getFacilityById;
const getFacilityByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const facility = await db_1.prisma.hospitalInformation.findMany({ where: { facilityName: { contains: name, mode: 'insensitive' } } });
        res.status(200).json(facility);
    }
    catch (error) {
        next(error);
    }
};
exports.getFacilityByName = getFacilityByName;
const verifyFacility = async (req, res, next) => {
    try {
        const { id } = req.params;
        const facility = await db_1.prisma.hospitalInformation.findUnique({ where: { id: parseInt(id) } });
        if (!facility) {
            return res.status(404).json({ message: "Facility not found" });
        }
        res.status(200).json({ message: "true" });
    }
    catch (error) {
        next(error);
    }
};
exports.verifyFacility = verifyFacility;
