<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let tid: number, name: string, code: string;
</script>

<div
	class="flex sm:flex-col justify-between my-2 sm:m-7 w-full sm:w-44 rounded p-5 shadow overflow-auto"
>
	<div class="flex sm:flex-col items-center sm:border-b border-gray-200">
		<img
			class="mx-3"
			src={`/${code}.${code !== 'ESP' ? 'webp' : 'jpg'}`}
			alt="Team logo"
			width={48}
			height={48}
		/>
		<span class="text-xl font-medium text-gray-800 py-2">{name}</span>
	</div>
	<div class="flex justify-center items-center pt-1 sm:pt-3">
		<LinkButton name="Plantilla" href={`/equipos/${tid}`} />
	</div>
</div>
