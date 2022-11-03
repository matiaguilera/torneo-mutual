import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { DateTime } from 'luxon';

export const load: PageServerLoad = async () => {
	const formatMatches = await prisma.match.findMany({
		where: {
			leagueId: 1,
			OR: [{ matchday: -1 }, { matchday: -2 }]
		},
		orderBy: [{ date: 'asc' }],
		include: {
			home: true,
			away: true,
			goals: {
				where: {
					quantity: {
						gt: 0
					}
				}
			}
		}
	});
	const matches = formatMatches.map((match) => {
		return { ...match, date: DateTime.fromJSDate(match.date).toString() };
	});
	return { matches };
};
