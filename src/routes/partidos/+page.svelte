<script lang="ts">
	import MatchCard from './MatchCard.svelte';

	export let data;

	let { matches } = data;
</script>

{#if matches.length > 0}
	<div class="flex justify-center my-5">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each matches as { id, home, away, matchday, date, status, goals }, index}
				{#if index % 4 === 0}
					<div class="md:col-span-2 bg-slate-100 border-y">
						<p class="text-black pl-2">Jornada {matchday} de 7</p>
					</div>
				{/if}
				<MatchCard {id} {home} {away} {date} {status} {goals} />
			{/each}
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center mt-10">
		<p class="text-gray-600">Próximamente</p>
	</div>
{/if}
