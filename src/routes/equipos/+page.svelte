<script lang="ts">
	import TeamItem from './TeamItem.svelte';
	export let data;

	let { teams } = data;
</script>

<div class="py-8 w-full">
	<div class="md:flex flex-wrap items-center justify-center">
		{#each teams as { id: tid, name, code }}
			<TeamItem {tid} {name} {code} />
		{/each}
	</div>
</div>
