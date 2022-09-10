<script lang="ts">
	import Standings from './Standings.svelte';
	import Scorers from './Scorers.svelte';

	export let data;

	let { standings, scorers } = data;

	const emptyStandings = [
		{
			code: 'GER',
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
			code: 'ARG',
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
			code: 'ENG',
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
			code: 'ESP',
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
			code: 'ITA',
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
			code: 'BRA',
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
			code: 'FRA',
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
			code: 'URU',
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
