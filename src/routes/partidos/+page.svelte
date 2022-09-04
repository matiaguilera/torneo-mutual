<script lang="ts">
	import MatchCard from './MatchCard.svelte';

	export let data;

	let { matches } = data;
</script>

{#if matches.length > 0}
	<div class="flex justify-center my-5">
		<div class="grid md:grid-cols-2 gap-4">
			{#each matches as { id, home, away, matchday }, index}
				{#if index % 4 === 0}
					<div class="col-span-2">
						<div>
							<p class="text-gray-800">Jornada {matchday} de 7</p>
						</div>
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
{/if}
