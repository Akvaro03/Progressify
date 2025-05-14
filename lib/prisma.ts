import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();
export const getUserWithHabits = async (userId: string) => {
    // Fetch user with habits
    // and include the habit logs for each habit
    return await prisma.user.findUnique({
        where: { id: userId },
        include: { habits: true },
    });
};

export const getHabitLogs = async (habitId: string) => {
    return await prisma.habitLog.findMany({
        where: { habitId },
        orderBy: { date: 'desc' },
    });
};
export default prisma;