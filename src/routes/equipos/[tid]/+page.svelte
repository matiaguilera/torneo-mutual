<script lang="ts">
	import PlayerItem from './PlayerItem.svelte';

	export let data;

	let { players } = data;
</script>

{#if players.length > 0}
	<div class="py-8 w-full">
		<div class="md:flex flex-wrap items-center justify-center w-full">
			{#each players as { name, lastName, number }}
				<PlayerItem {name} {lastName} {number} />
			{/each}
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center mt-10">
		<p class="text-gray-600">Próximamente</p>
	</div>
{/if}
