<script lang="ts">
	import Scoreboard from './Scoreboard.svelte';

	export let data;

	let { matches } = data;
</script>

{#if matches.length > 0}
	{#each matches as { home, away, goals }}
		<Scoreboard {home} {away} {goals} />
	{/each}
{:else}
	<div class="flex items-center justify-center m-10">
		<p class="text-gray-600">Próximamente</p>
	</div>
{/if}
