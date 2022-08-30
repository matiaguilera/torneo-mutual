import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const teams = await prisma.team.findMany({
		where: { leagueId: 1 }
	});
	return { teams };
};
