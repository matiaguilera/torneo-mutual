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
				<span class="ml-1 font-normal">{tag.name}</span>
			</div>
			{#if index === selected}
				<div class="w-full h-1 bg-indigo-700 rounded-t-md" />
			{/if}
		</a>
	{/each}
</div>
