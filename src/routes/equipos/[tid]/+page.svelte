<script lang="ts">
	export let data;

	let {
		team: { name, code, players }
	} = data;
</script>

<div class="flex justify-center">
	<div class="flex items-center max-w-2xl w-full">
		<img
			class="mt-4 mx-3"
			src={`/${code}.${code !== 'ESP' ? 'webp' : 'jpg'}`}
			alt="Team logo"
			width={48}
			height={48}
		/>
		<div class="text-4xl font-medium text-gray-600 mb-3 mt-6">{name}</div>
	</div>
</div>
{#if players.length > 0}
	<div class="mt-4 mb-8 flex justify-center overflow-auto text-center">
		<div class="w-full max-w-2xl rounded-md border">
			<table class="w-full table-auto divide-y divide-gray-200">
				<thead>
					<tr class="bg-gray-50 text-sm text-gray-500">
						<th class="px-4 py-2 text-left font-semibold">Jugador</th>
						<th class="font-semibold pr-4">Dorsal</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					{#each players as { name, lastName, number }}
						<tr>
							<td class="px-4 py-2 text-left">
								{name}
								{lastName}
							</td>
							<td class="w-10 pr-4">{number}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center mt-10">
		<p class="text-gray-600">Aún no se han registrado jugadores...</p>
	</div>
{/if}
