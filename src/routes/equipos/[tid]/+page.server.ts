import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.tid);
	const team = await prisma.team.findUnique({
		where: { id },
		select: {
			name: true,
			code: true,
			players: true
		}
	});
	return { team };
};

export const prerender = true;
