import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    try {
        const bookings = await prisma.bookings.findMany();
        return {
            success: true,
            data: bookings
        };
    } catch (error: any) {
        return {
            success: false,
            message: 'Error fetching',
            error: error.message
        };
    }
})