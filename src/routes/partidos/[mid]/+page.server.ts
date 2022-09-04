import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { mid } = params;
	const match = await prisma.match.findUnique({
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
	return { match };
};
