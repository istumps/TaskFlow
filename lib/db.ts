import {PrismaClient} from '@prisma/client'
declare global {
    var prisam: PrismaClient | undefined; //FIX for NextJs HOT RELOAD
}
export const db = globalThis.prisam || new PrismaClient();
if(process.env.NODE_ENV !== 'production') globalThis.prisam = db;