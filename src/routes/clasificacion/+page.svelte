<script lang="ts">
	import StaticStandings from './StaticStandings.svelte';
	import LeastBeated from './LeastBeated.svelte';
	import Scorers from './Scorers.svelte';

	export let data;

	let { scorers, teams } = data;

	// const emptyStandings = [
	// 	{
	// 		code: 'GER',
	// 		name: 'Alemania',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'ARG',
	// 		name: 'Argentina',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'ENG',
	// 		name: 'Inglaterra',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'ESP',
	// 		name: 'España',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'ITA',
	// 		name: 'Italia',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'BRA',
	// 		name: 'Brasil',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'FRA',
	// 		name: 'Francia',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	},
	// 	{
	// 		code: 'URU',
	// 		name: 'Uruguay',
	// 		mp: 0,
	// 		w: 0,
	// 		d: 0,
	// 		l: 0,
	// 		gf: 0,
	// 		ga: 0,
	// 		gd: 0,
	// 		pts: 0
	// 	}
	// ];
</script>

<StaticStandings />
<div class="mt-10 -mb-3 font-medium text-gray-600 text-center text-lg">
	<p>Menos goleados</p>
</div>
<LeastBeated {teams} />
<div class="mt-10 -mb-3 font-medium text-gray-600 text-center text-lg">
	<p>Goleadores</p>
</div>
<Scorers {scorers} />
