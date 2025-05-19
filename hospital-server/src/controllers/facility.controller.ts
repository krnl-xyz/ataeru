import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";


export const getFacility = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const facilities = await prisma.hospitalInformation.findMany()
      res.status(200).json(facilities)
   } catch (error) {
      next(error)
   }
}



export const getFacilityById = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { id } = req.params
      const facility = await prisma.hospitalInformation.findUnique({ where: { id: parseInt(id) } })
      res.status(200).json(facility)
   } catch (error) {
      next(error)
   }
}


export const getFacilityByName = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { name } = req.params
      const facility = await prisma.hospitalInformation.findMany({ where: { facilityName: { contains: name, mode: 'insensitive' } } })
      res.status(200).json(facility)
   } catch (error) {
      next(error)
   }
}

export const verifyFacilityById = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { id } = req.params
      const facility = await prisma.hospitalInformation.findUnique({ where: { id: parseInt(id) } })
      if (!facility) {
         // return res.status(404).json({ message: "Facility not found" })
         res.status(200).json({ message: false })
      }
      res.status(200).json({ message: true })
   } catch (error) {
      next(error)
   }
}