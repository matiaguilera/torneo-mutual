<script lang="ts">
	export let home: Team, away: Team, goals: GoalWithPlayer[];
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
	class="flex items-center justify-between text-sm text-gray-700 mt-5 p-5 sm:w-2/3 sm:max-w-xl border rounded-lg shadow m-auto overflow-auto"
>
	<div class="basis-1/4 text-center">
		<div>
			<img width={48} height={48} alt="Team logo" class="m-auto" src="/team.png" />
		</div>
		<p class="whitespace-nowrap">{home.name}</p>
	</div>
	<div class="font-medium text-3xl mb-5 flex justify-between basis-1/3 text-black">
		<div>{homeGoals}</div>
		<div>-</div>
		<div>{awayGoals}</div>
	</div>
	<div class="basis-1/4 text-center">
		<div>
			<img width={48} height={48} alt="Team logo" class="m-auto" src="/team.png" />
		</div>
		<p class="whitespace-nowrap">{away.name}</p>
	</div>
</div>
