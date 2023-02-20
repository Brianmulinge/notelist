import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined // <-- declare global variable
}

const client = global.prisma || new PrismaClient() // <-- initialize global variable
if (process.env.NODE_ENV === 'development') global.prisma = client // <-- set global variable

export default client