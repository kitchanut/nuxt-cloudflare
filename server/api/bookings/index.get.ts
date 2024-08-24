// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

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