<script lang="ts">
	import Standings from './Standings.svelte';
	import Scorers from './Scorers.svelte';

	export let data;

	let { standings, scorers } = data;

	const emptyStandings = [
		{
			name: 'Alemania',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Argentina',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Inglaterra',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'España',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Italia',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Brasil',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Francia',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		},
		{
			name: 'Uruguay',
			mp: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			gd: 0,
			pts: 0
		}
	];
</script>

{#if standings.length > 0}
	<Standings {standings} />
	<Scorers {scorers} />
{:else}
	<Standings standings={emptyStandings} />
	<div class="mt-10 font-medium text-gray-600 text-center text-lg">
		<p>Goleadores</p>
	</div>
	<div class="flex items-center justify-center m-5">
		<p class="text-gray-600">Aún no se han anotado goles...</p>
	</div>
{/if}
