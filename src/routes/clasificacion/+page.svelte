<script lang="ts">
	import Standings from './Standings.svelte';
	import Scorers from './Scorers.svelte';

	export let data;

	let { standings, scorers } = data;
</script>

{#if standings.length > 0}
	<Standings {standings} />
	<Scorers {scorers} />
{:else}
	<div class="flex items-center justify-center m-10">
		<p class="text-gray-600">Próximamente</p>
	</div>
{/if}
