<script lang="ts">
	import MatchCard from '../partidos/MatchCard.svelte';
	export let data;

	//Charge data and test

	let { matches } = data;
</script>

<h3 class="text-gray-600 font-medium text-lg text-center mt-4">Semifinales</h3>
<div class="flex justify-center my-5">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each matches as { id, home, away, matchday, date, status, goals }, index}
			{#if index === 0}
				<div class="md:col-span-2 bg-slate-100 border-y">
					<p class="text-black pl-2">Primera vuelta</p>
				</div>
			{:else if index === 4}
				<div class="md:col-span-2 bg-slate-100 border-y">
					<p class="text-black pl-2">Segunda vuelta</p>
				</div>
			{/if}
			<div class={`border-l-4 w-min ${matchday === -1 ? 'border-yellow-500' : 'border-gray-400'}`}>
				<MatchCard {id} {home} {away} {date} {status} {goals} />
			</div>
		{/each}
	</div>
</div>
