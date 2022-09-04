import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const matches = await prisma.match.findMany({
		where: {
			leagueId: 1
		},
		include: {
			home: true,
			away: true
		}
	});
	return { matches };
};
