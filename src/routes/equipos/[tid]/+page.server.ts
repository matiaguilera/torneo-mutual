import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const teamId = parseInt(params.tid);
	const players = await prisma.player.findMany({
		where: { teamId }
	});
	return { players };
};
