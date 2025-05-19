"use strict";
// scripts/importHospitalInfo.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const prisma_1 = require("../prisma/generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function importHospitalInformationFromCSV(filePath) {
    const hospitals = [];
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(filePath)
            .pipe((0, csv_parser_1.default)())
            .on('data', (row) => {
            hospitals.push({
                id: row.id,
                facilityId: row.facilityId,
                facilityName: row.facilityName,
                address: row.address,
                city: row.city,
                state: row.state,
                zip: row.zip,
                telephone: row.telephone,
                country: row.country,
                hospitalType: row.hospitalType,
                hospitalOwnership: row.hospitalOwnership,
                hospitalOverallRating: row.hospitalOverallRating,
                hospitalOverallRatingFootnote: row.hospitalOverallRatingFootnote,
                emergencyServices: row.emergencyServices,
            });
        })
            .on('end', async () => {
            try {
                for (const hospital of hospitals) {
                    await prisma.hospitalInformation.create({
                        data: hospital,
                    });
                }
                console.log(`Imported ${hospitals.length} hospital records.`);
                resolve();
            }
            catch (err) {
                console.error('Error importing data:', err);
                reject(err);
            }
            finally {
                await prisma.$disconnect();
            }
        });
    });
}
// Call the function if run directly
if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a CSV file path.');
        process.exit(1);
    }
    importHospitalInformationFromCSV(filePath);
}
// importHospitalInformationFromCSV('../src/data/Hospital_General_Information.csv')
