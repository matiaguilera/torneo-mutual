<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let tid: number, name: string, code: string;
</script>

<div class="md:w-4/12 md:mx-7 mb-7 p-6 shadow rounded">
	<div class="flex items-center border-b border-gray-200 pb-6">
		<img
			class="mx-3"
			src={code !== 'ESP' ? `/${code}.webp` : `/${code}.jpg`}
			alt="Team logo"
			width={48}
			height={48}
		/>
		<div class="flex items-start justify-between w-full">
			<div class="pl-3 w-full">
				<p class="text-xl font-medium leading-5 text-gray-800">
					{name}
				</p>
			</div>
		</div>
	</div>
	<div class="flex px-2 pt-4 gap-3">
		<LinkButton name="Jugadores" href={`/equipos/${tid}`} />
	</div>
</div>
