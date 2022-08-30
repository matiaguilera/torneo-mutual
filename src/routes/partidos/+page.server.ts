import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const matches = await prisma.match.findMany({
		where: {
			leagueId: 1
		},
		include: {
			home: {
				include: {
					players: true
				}
			},
			away: {
				include: {
					players: true
				}
			},
			goals: {
				include: {
					player: true
				}
			}
		}
	});
	return { matches };
};
