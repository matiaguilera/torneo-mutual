<script lang="ts">
	export let tags: Tag[], selected: number;
	const handleClick = (index: number) => {
		selected = index;
	};
</script>

<div class="relative z-20">
	<div class="hidden sm:flex justify-center items-center text-sm h-12 z-30 shadow">
		{#each tags as { name, url }, index}
			<a
				href={url}
				on:click={(e) => handleClick(index)}
				class={`${
					index === selected && 'border-b-2 border-slate-700'
				} w-36 hover:bg-slate-100 hover:text-slate-700 text-slate-600 h-full flex items-center justify-center cursor-pointer`}
			>
				{name}
			</a>
		{/each}
	</div>
</div>
