<script lang="ts">
	import PlayerItem from './PlayerItem.svelte';

	export let data;

	let { players } = data;
</script>

<div class="py-8 w-full">
	<div class="md:flex flex-wrap items-center justify-center w-full">
		{#each players as { name, lastName, number }}
			<PlayerItem {name} {lastName} {number} />
		{/each}
	</div>
</div>
