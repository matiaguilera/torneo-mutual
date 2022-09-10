<script lang="ts">
	import TeamItem from './TeamItem.svelte';
	export let data;

	//Deploy test

	let { teams } = data;
</script>

<div class="flex justify-center">
	<div class="sm:py-6 w-full max-w-5xl">
		<div class="flex flex-wrap items-center justify-center">
			{#each teams as { id: tid, name, code }}
				<TeamItem {tid} {name} {code} />
			{/each}
		</div>
	</div>
</div>
