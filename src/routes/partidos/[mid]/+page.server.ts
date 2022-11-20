import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { DateTime } from 'luxon';

export const load: PageServerLoad = async ({ params }) => {
	const { mid } = params;
	const formatMatch = await prisma.match.findUnique({
		where: {
			id: parseInt(mid)
		},
		select: {
			date: true,
			status: true,
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
				where: {
					quantity: {
						gt: 0
					}
				},
				include: {
					player: true
				}
			}
		}
	});
	const match = {
		...formatMatch,
		date: DateTime.fromJSDate(formatMatch?.date).toString()
	};
	return { match };
};

export const prerender = true;
