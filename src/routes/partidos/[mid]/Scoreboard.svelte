<script lang="ts">
	import { DateTime } from 'luxon';
	export let home: Team, away: Team, goals: GoalWithPlayer[], date: string, status: string;
	function capitalize(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
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
	class="m-auto my-6 overflow-auto rounded-lg border p-5 text-sm text-gray-700 shadow sm:w-2/3 sm:max-w-xl"
>
	<div class="flex justify-between pb-6">
		<span>
			{capitalize(
				DateTime.fromISO(date).setLocale('es').toLocaleString({
					weekday: 'short',
					day: 'numeric',
					month: 'numeric',
					hour: 'numeric',
					minute: 'numeric'
				})
			)}
		</span>
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
			<p class="whitespace-nowrap mt-1">{home.name}</p>
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
			<p class="mt-1 whitespace-nowrap">{away.name}</p>
		</div>
	</div>
	{#if goals.length > 0}
		<hr class="mt-5" />
		<div class="flex justify-between pt-5">
			<div class="basis-2/5">
				<ul>
					{#each goals as { player: { name, lastName, teamId }, quantity }}
						{#if teamId === home.id}
							<li>
								{name}
								{lastName}
								{#if quantity > 1}
									({quantity})
								{/if}
							</li>
						{/if}
					{/each}
				</ul>
			</div>
			<div class="basis-1/5 flex justify-center items-start">
				<img
					width={24}
					height={24}
					alt="Ilustración de pelota de fútbol"
					src="https://ssl.gstatic.com/onebox/sports/soccer_timeline/soccer-ball-retina.png"
				/>
			</div>
			<div class="basis-2/5">
				<ul class="text-right">
					{#each goals as { player: { name, lastName, teamId }, quantity }}
						{#if teamId === away.id}
							<li>
								{name}
								{lastName}
								{#if quantity > 1}
									({quantity})
								{/if}
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>
