<script lang="ts">
	export let scorers: Scorer[];
</script>

<div class="mt-10 flex justify-center overflow-auto text-center">
	<div class="w-full max-w-2xl rounded-md border">
		<table class="w-full table-auto divide-y divide-gray-200">
			<thead>
				<tr class="bg-gray-50 text-sm text-gray-500">
					<th class="font-semibold">Pos</th>
					<th class="px-4 py-2 text-left font-semibold">Jugador</th>
					<th class="font-semibold pr-4">Goles</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#each scorers as { name, lastName, sum }, i}
					<tr>
						<td>{i + 1}</td>
						<td class="px-4 py-2 text-left">
							{name + ' ' + lastName}
						</td>
						<td class="w-10 pr-4">{sum}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
