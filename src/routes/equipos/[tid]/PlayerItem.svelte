<script lang="ts">
	export let name: string, lastName: string, number: number;
</script>

<div class="md:w-4/12 md:mx-7 mb-7 bg-white p-6 shadow rounded">
	<div class="flex items-center border-b border-gray-200 pb-6">
		<img class="rounded-full" src="/player.png" alt="Player pic" width={48} height={48} />
		<div class="flex items-start justify-between w-full">
			<div class="pl-3 w-full">
				<p class="text-xl font-medium leading-5 text-gray-800">
					{name}
					{lastName}
				</p>
				<p class="text-sm leading-normal pt-2 text-gray-500">Número {number}</p>
			</div>
		</div>
	</div>
	<div class="px-2 pt-4" />
</div>
