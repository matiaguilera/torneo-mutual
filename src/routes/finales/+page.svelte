<script lang="ts">
	import MatchCard from '../partidos/MatchCard.svelte';
	const goldMatches: any = [];
	const plateMatches: any = [];
	let bracket = true;
	const handleClick = (option: boolean) => {
		if (option) {
			bracket = true;
		} else {
			bracket = false;
		}
	};
</script>

<div class="flex justify-center">
	<div class="flex md:w-96 sm:mt-10 mt-4">
		<button
			on:click={() => handleClick(false)}
			type="button"
			class={`w-full border-l border-y text-base rounded-l-md text-gray-600 bg-white ${
				!bracket && 'bg-gray-100'
			} px-4 py-2`}
		>
			Plata
		</button>
		<button
			on:click={() => handleClick(true)}
			type="button"
			class={`w-full border text-base text-gray-600 rounded-r-md bg-white px-4 py-2 ${
				bracket && 'bg-gray-100'
			}`}
		>
			Oro
		</button>
	</div>
</div>

<h3 class="text-gray-600 font-medium text-lg text-center mt-4">Semifinales</h3>
<div class="flex justify-center my-5">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#if bracket}
			<div class="md:col-span-2 bg-slate-100 border-y">
				<p class="text-black pl-2">Primera vuelta</p>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/BRA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Brasil
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ARG.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Argentina
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 1/12</div>
						<div>19:00</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ENG.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Inglaterra
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/URU.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Uruguay
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 1/12</div>
						<div>19:30</div>
					</div>
				</div>
			</div>
			<div class="md:col-span-2 bg-slate-100 border-y">
				<p class="text-black pl-2">Segunda vuelta</p>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ENG.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Inglaterra
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/URU.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Uruguay
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 8/12</div>
						<div>19:00</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/BRA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Brasil
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ARG.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Argentina
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 8/12</div>
						<div>19:30</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="md:col-span-2 bg-slate-100 border-y">
				<p class="text-black pl-2">Primera vuelta</p>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/FRA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Francia
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ESP.jpg" alt="Escudo del equipo" width={24} height={24} />
						</div>
						España
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 1/12</div>
						<div>19:00</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/GER.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Alemania
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ITA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Italia
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 1/12</div>
						<div>19:30</div>
					</div>
				</div>
			</div>
			<div class="md:col-span-2 bg-slate-100 border-y">
				<p class="text-black pl-2">Segunda vuelta</p>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/GER.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Alemania
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ITA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Italia
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 8/12</div>
						<div>19:00</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center h-28 sm:w-96 w-screen border overflow-auto">
				<div class="flex flex-col justify-center">
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/FRA.webp" alt="Escudo del equipo" width={24} height={24} />
						</div>
						Francia
					</div>
					<div class="flex h-8 items-center">
						<div class="flex h-8 w-16 justify-center">
							<img class="py-2" src="/ESP.jpg" alt="Escudo del equipo" width={24} height={24} />
						</div>
						España
					</div>
				</div>
				<div class="flex">
					<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
						<div>jue, 8/12</div>
						<div>19:30</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
