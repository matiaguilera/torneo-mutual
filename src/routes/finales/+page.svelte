<script lang="ts">
	import MatchCard from '../partidos/MatchCard.svelte';
	export let data;

	let { matches } = data;
</script>

<div class="flex justify-center my-5">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each matches as { id, home, away, matchday, date, status, goals }, index}
			{#if index === 0}
				<h3 class="md:col-span-2 text-gray-600 font-medium text-lg text-center mt-2">
					Semifinales
				</h3>
				<div class="md:col-span-2 bg-slate-100 border-y">
					<p class="text-black pl-2">Primera vuelta</p>
				</div>
			{:else if index === 4}
				<div class="md:col-span-2 bg-slate-100 border-y">
					<p class="text-black pl-2">Segunda vuelta</p>
				</div>
			{:else if index === 8}
				<h3 class="md:col-span-2 text-gray-600 font-medium text-lg text-center mt-4">Finales</h3>
			{/if}
			<div
				class={`md:border-l-4 w-min ${matchday === -1 ? 'border-yellow-500' : 'border-gray-400'}`}
			>
				<div
					class={`md:hidden h-1 w-full bg-gradient-to-r z-10 ${
						matchday === -1 ? 'from-yellow-300 to-yellow-100' : 'from-gray-200 to-gray-100'
					}`}
				/>
				<MatchCard {id} {home} {away} {date} {status} {goals} />
			</div>
		{/each}
	</div>
</div>
