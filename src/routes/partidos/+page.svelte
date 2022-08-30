<script lang="ts">
	import Scoreboard from './Scoreboard.svelte';

	export let data;

	let { matches } = data;
</script>

{#each matches as { home, away, goals }}
	<Scoreboard {home} {away} {goals} />
{/each}
