<script lang="ts">
	import Information from './Information.svelte';

	export let data;

	let { leagueData } = data;
</script>

<Information {leagueData} />
