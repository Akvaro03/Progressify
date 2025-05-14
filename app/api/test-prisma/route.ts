import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'; // para /app
// import type { NextApiRequest, NextApiResponse } from 'next' // para /pages

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            take: 1,
        });

        return NextResponse.json({
            success: true,
            message: 'Conexión exitosa',
            data: users,
        });
    } catch (error) {
        console.error('Error al conectar con Prisma:', error);
        return NextResponse.json({
            success: false,
            message: 'Error al conectar con Prisma',
            error: (error as Error).message,
        }, { status: 500 });
    }
}
