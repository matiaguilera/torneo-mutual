<script lang="ts">
	import { page } from '$app/stores';
	import SmallTab from './SmallTab.svelte';
	import LargeTab from './LargeTab.svelte';

	let pathname = '';

	page.subscribe((value) => {
		pathname = value.url.pathname;
	});

	const tags = [
		{ name: 'Información', url: '/' },
		{ name: 'Equipos', url: '/equipos' },
		{ name: 'Partidos', url: '/partidos' },
		{ name: 'Clasificación', url: '/clasificacion' },
		{ name: 'Fase final', url: '/finales' }
	];

	const regexUrl = /\/(\w+)?/;

	let selected = tags.findIndex((tag) => tag.url === pathname.match(regexUrl)![0]);
</script>

<SmallTab {tags} {selected} />
<LargeTab {tags} {selected} />
