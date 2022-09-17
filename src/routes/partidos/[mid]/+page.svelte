<script lang="ts">
	import Scoreboard from './Scoreboard.svelte';

	export let data;

	let { match } = data;
</script>

{#if match.id === '1'}
	<Scoreboard {...match} />
{:else}
	<div class="flex items-center justify-center m-10">
		<p class="text-gray-600 text-center">
			Página en desarrollo.
			<br />
			Próximamente aquí se podrán ver los detalles de cada partido.
		</p>
	</div>
{/if}
