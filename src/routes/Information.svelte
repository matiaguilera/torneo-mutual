<script lang="ts">
	export let leagueData: { name: string; status: string };
</script>

<div class="shadow">
	<div class="p-5">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Información del torneo</h3>
		<p class="mt-1 text-sm text-gray-500">Detalles</p>
	</div>
	<div class="border-t border-gray-200">
		<dl>
			<div class="bg-gray-50 p-5 sm:grid sm:grid-cols-3">
				<dt class="text-sm font-medium text-gray-500">Nombre</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{leagueData.name}</dd>
			</div>
			<div class="p-5 sm:grid sm:grid-cols-3">
				<dt class="text-sm font-medium text-gray-500">Estado</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{leagueData.status}</dd>
			</div>
		</dl>
	</div>
</div>
