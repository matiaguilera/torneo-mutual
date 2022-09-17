<script lang="ts">
	import { goto } from '$app/navigation';
	import { DateTime } from 'luxon';

	export let id: number, home: Team, away: Team, date: string, status: string, goals: Goal[];

	const readableDate = DateTime.fromISO(date)
		.setLocale('es')
		.toLocaleString({ weekday: 'short', day: 'numeric', month: 'numeric' });
	const time = DateTime.fromISO(date)
		.setLocale('es')
		.toLocaleString({ hour: 'numeric', minute: 'numeric' });

	let homeGoals = 0;
	let awayGoals = 0;

	if (status === 'Finalizado') {
		goals.forEach((goal) => {
			if (goal.teamId === home.id) {
				homeGoals += goal.quantity;
			} else {
				awayGoals += goal.quantity;
			}
		});
	}
</script>

<div
	on:click={() => goto(`/partidos/${id}`)}
	class="flex justify-between items-center h-28 sm:w-96 w-screen cursor-pointer border hover:bg-gray-100 overflow-auto"
>
	<div class="flex flex-col justify-center">
		<div class="flex h-8 items-center">
			<div class="flex h-8 w-16 justify-center">
				<img
					class="py-2"
					src={home.code !== 'ESP' ? `/${home.code}.webp` : `/${home.code}.jpg`}
					alt="Escudo del equipo"
					width={24}
					height={24}
				/>
			</div>
			{home.name}
		</div>
		<div class="flex h-8 items-center">
			<div class="flex h-8 w-16 justify-center">
				<img
					class="py-2"
					src={away.code !== 'ESP' ? `/${away.code}.webp` : `/${away.code}.jpg`}
					alt="Escudo del equipo"
					width={24}
					height={24}
				/>
			</div>
			{away.name}
		</div>
	</div>
	<div class="flex">
		{#if status === 'Finalizado'}
			<div class="flex flex-col gap-2 justify-center pr-3 items-center">
				<div>{homeGoals}</div>
				<div>{awayGoals}</div>
			</div>
		{/if}
		<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
			{#if status === 'Finalizado'}
				<div>Fin</div>
				<div>{readableDate}</div>
			{:else}
				<div>{readableDate}</div>
				<div>{time}</div>
			{/if}
		</div>
	</div>
</div>
