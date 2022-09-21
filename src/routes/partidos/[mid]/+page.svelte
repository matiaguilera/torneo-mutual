<script lang="ts">
	import Scoreboard from './Scoreboard.svelte';

	export let data;

	let { match } = data;
</script>

<Scoreboard {...match} />
