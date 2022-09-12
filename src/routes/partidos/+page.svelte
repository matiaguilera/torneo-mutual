<!-- <script lang="ts">
	import MatchCard from './MatchCard.svelte';

	export let data;

	let { matches } = data;
</script>

{#if matches.length > 0}
	<div class="flex justify-center my-5">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each matches as { id, home, away, matchday }, index}
				{#if index % 4 === 0}
					<div class="md:col-span-2 bg-slate-100 border-y">
						<p class="text-black pl-2">Jornada {matchday} de 7</p>
					</div>
				{/if}
				<MatchCard {id} {home} {away} />
			{/each}
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center mt-10">
		<p class="text-gray-600">Próximamente</p>
	</div>
{/if} -->

<!-- +page.server.ts
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
}; -->

<div class="flex justify-center my-5">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="md:col-span-2 bg-slate-100 border-y">
			<p class="text-black pl-2">Jornada 1 de 7</p>
		</div>

		<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
			<div class="flex flex-col justify-center">
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/ITA.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Italia
				</div>
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/FRA.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Francia
				</div>
			</div>
			<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
				<div>Jue, 15/9</div>
				<div>19:00</div>
			</div>
		</div>

		<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
			<div class="flex flex-col justify-center">
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/ARG.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Argentina
				</div>
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/URU.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Uruguay
				</div>
			</div>
			<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
				<div>Jue, 15/9</div>
				<div>19:30</div>
			</div>
		</div>

		<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
			<div class="flex flex-col justify-center">
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/BRA.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Brasil
				</div>
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/GER.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Alemania
				</div>
			</div>
			<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
				<div>Jue, 15/9</div>
				<div>20:00</div>
			</div>
		</div>

		<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
			<div class="flex flex-col justify-center">
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/ENG.webp" alt="Escudo del equipo" width={24} height={24} />
					</div>
					Inglaterra
				</div>
				<div class="flex h-8">
					<div class="flex h-8 w-16 justify-center">
						<img class="py-2" src="/ESP.jpg" alt="Escudo del equipo" width={24} height={24} />
					</div>
					España
				</div>
			</div>
			<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
				<div>Jue, 15/9</div>
				<div>20:30</div>
			</div>
		</div>
	</div>
</div>

<div class="flex items-center justify-center my-10">
	<p class="text-gray-600 text-center">
		Todos los demás partidos estarán disponibles desde la próxima semana.
	</p>
</div>
