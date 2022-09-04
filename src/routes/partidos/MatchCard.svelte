<script lang="ts">
	export let id: number, home: Team, away: Team;
</script>

<a
	href={`/partidos/${id}`}
	class="flex justify-between items-center h-28 w-96 cursor-pointer border hover:bg-gray-100"
>
	<div class="flex flex-col justify-center">
		<div class="flex h-8">
			<div class="flex h-8 w-16 justify-center">
				<img
					class="py-2"
					src={home.code !== 'ESP' ? `/${home.code}.webp` : `/${home.code}.jpg`}
					alt="Escudo del equipo"
					width={24}
					height={24}
				/>
			</div>
			{home.name}
		</div>
		<div class="flex h-8">
			<div class="flex h-8 w-16 justify-center">
				<img
					class="py-2"
					src={away.code !== 'ESP' ? `/${away.code}.webp` : `/${away.code}.jpg`}
					alt="Escudo del equipo"
					width={24}
					height={24}
				/>
			</div>
			{away.name}
		</div>
	</div>
	<div class="flex flex-col w-28 h-20 justify-center items-center border-l">
		<div>Sáb, 10/9</div>
		<div>07:30</div>
	</div>
</a>
