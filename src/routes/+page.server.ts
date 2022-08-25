import prisma from '../prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const leagueData = await prisma.league.findUnique({
		where: { id: 1 },
		select: { name: true, status: true }
	});
	return { leagueData };
};
