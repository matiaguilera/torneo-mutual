<script lang="ts">
	export let home: Team, away: Team, goals: GoalWithPlayer[], date: string, status: string;
	let homeGoals = 0;
	let awayGoals = 0;
	goals.forEach((goal) => {
		if (goal.teamId === home.id) {
			homeGoals += goal.quantity;
		} else {
			awayGoals += goal.quantity;
		}
	});
</script>

<div
	class="m-auto mt-5 overflow-auto rounded-lg border p-5 text-sm text-gray-700 shadow sm:w-2/3 sm:max-w-xl"
>
	<div class="flex justify-between pb-5">
		<span> {date} </span>
		<span> {status} </span>
	</div>
	<div class="flex items-center justify-between">
		<div class="basis-1/4 text-center">
			<div>
				<img
					width="48"
					height="48"
					alt="Team logo"
					class="m-auto"
					src={home.code !== 'ESP' ? `/${home.code}.webp` : `/${home.code}.jpg`}
				/>
			</div>
			<p class="whitespace-nowrap">{home.name}</p>
		</div>
		<div class="mb-5 flex basis-1/3 justify-between text-3xl font-medium text-black">
			<div>{homeGoals}</div>
			<div>-</div>
			<div>{awayGoals}</div>
		</div>
		<div class="basis-1/4 text-center">
			<div>
				<img
					width="48"
					height="48"
					alt="Team logo"
					class="m-auto"
					src={away.code !== 'ESP' ? `/${away.code}.webp` : `/${away.code}.jpg`}
				/>
			</div>
			<p class="whitespace-nowrap">{away.name}</p>
		</div>
	</div>
	{#if goals.length > 0}
		<hr class="pt-5" />
		<div class="flex justify-between pt-5">
			<div>
				<ul>
					<li>Luke Thomas</li>
					<li>Moisés Caicedo</li>
					<li>Leandro Trossard</li>
				</ul>
			</div>
			<div>
				<img
					width={24}
					height={24}
					alt="Ilustración de pelota de fútbol"
					src="https://ssl.gstatic.com/onebox/sports/soccer_timeline/soccer-ball-retina.png"
				/>
			</div>
			<div>
				<ul class="text-right">
					<li>Kalechi Iheanacho</li>
					<li>Patson Daka</li>
				</ul>
			</div>
		</div>
	{/if}
</div>
