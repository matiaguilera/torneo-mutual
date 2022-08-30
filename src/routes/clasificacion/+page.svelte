<script lang="ts">
	import Standings from './Standings.svelte';
	import Scorers from './Scorers.svelte';

	export let data;

	let { standings, scorers } = data;
</script>

<Standings {standings} />
<Scorers {scorers} />
