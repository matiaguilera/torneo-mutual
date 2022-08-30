<script lang="ts">
	export let standings: Standing[];
</script>

<div class="mt-10 flex text-center justify-center overflow-auto">
	<div class="rounded-md border w-full max-w-2xl">
		<table class="table-auto divide-y divide-gray-200 w-full">
			<thead>
				<tr class="text-gray-500 text-sm bg-gray-50">
					<th class="hidden sm:table-cell font-semibold">Pos</th>
					<th class="text-left px-4 font-semibold py-2">Club</th>
					<th class="hidden sm:table-cell font-semibold">MP</th>
					<th class="font-semibold">W</th>
					<th class="font-semibold">D</th>
					<th class="font-semibold">L</th>
					<th class="hidden sm:table-cell font-semibold">GF</th>
					<th class="hidden sm:table-cell font-semibold ">GA</th>
					<th class="font-semibold">GD</th>
					<th class="font-semibold">Pts</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#each standings as { name, mp, w, d, l, gf, ga, gd, pts }, i}
					<tr>
						<td class="hidden sm:table-cell w-10">{i + 1}</td>
						<td class="text-left px-4 py-2">{name}</td>
						<td class="hidden sm:table-cell w-10">{mp}</td>
						<td class="w-10">{w}</td>
						<td class="w-10">{d}</td>
						<td class="w-10">{l}</td>
						<td class="hidden sm:table-cell w-10">{gf}</td>
						<td class="hidden sm:table-cell w-10">{ga}</td>
						<td class="w-10">{gd}</td>
						<td class="w-10">{pts}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
