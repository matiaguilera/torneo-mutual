<script lang="ts">
	export let tags: Tag[], selected: number;
	const handleClick = (index: number) => {
		selected = index;
	};
</script>

<div class="xl:w-full h-12 hidden sm:flex px-5 shadow">
	{#each tags as tag, index}
		<a
			href={tag.url}
			on:click={(e) => handleClick(index)}
			class={`${
				index === selected ? 'text-indigo-700' : 'text-gray-600 py-3 hover:text-indigo-700'
			} text-sm mx-6 py-3 z-10`}
		>
			<div class="flex items-center mb-3">
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-home"
						width={16}
						height={16}
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<polyline points="5 12 3 12 12 3 21 12 19 12" />
						<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
						<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
					</svg>
				</span>
				<span class="ml-1 font-normal">{tag.name}</span>
			</div>
			{#if index === selected}
				<div class="w-full h-1 bg-indigo-700 rounded-t-md" />
			{/if}
		</a>
	{/each}
</div>
