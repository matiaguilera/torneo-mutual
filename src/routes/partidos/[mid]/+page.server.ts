import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { DateTime } from 'luxon';

export const load: PageServerLoad = async ({ params }) => {
	const { mid } = params;
	function capitalize(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
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
		date: capitalize(
			DateTime.fromJSDate(formatMatch?.date).setLocale('es').toLocaleString({
				weekday: 'short',
				day: 'numeric',
				month: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})
		)
	};
	return { match };
};
