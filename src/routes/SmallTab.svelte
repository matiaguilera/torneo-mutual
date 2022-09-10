<script lang="ts">
	import { clickOutside } from './click_outside';

	export let tags: Tag[], selected: number;
	let showOptions = false;
	let active = [false, false, false, false];
	const handleClick = (index: number) => {
		active[selected] = false;
		active[index] = true;
		selected = index;
		showOptions = !showOptions;
	};
</script>

<div
	use:clickOutside
	on:outclick={() => {
		showOptions = false;
	}}
	class="sm:hidden relative w-11/12 m-5"
>
	<button
		on:click={() => {
			showOptions = !showOptions;
		}}
		class="w-full p-3 text-left rounded-lg border border-gray-300 shadow-sm cursor-default"
	>
		{tags[selected].name}
		<span class="absolute inset-y-0 right-2 flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>

	{#if showOptions}
		<ul
			class="absolute w-full py-1 mt-1 text-base bg-white rounded-md shadow-md border border-gray-200 z-30"
		>
			{#each tags as tag, index}
				<li
					on:mouseover={() => (active[index] = true)}
					on:mouseout={() => (active[index] = false)}
					on:focus={() => (active[index] = true)}
					on:blur={() => (active[index] = false)}
					class={`relative pl-10 ${
						active[index] ? 'text-slate-900 bg-slate-100' : 'text-gray-900'
					}`}
				>
					<a href={tag.url} on:click={(e) => handleClick(index)} class="block py-2 cursor-default">
						<span class={`${index === selected ? 'font-medium' : 'font-normal'}`}>
							{tag.name}
						</span>
						{#if index === selected}
							<span class="absolute inset-y-0 left-3 flex items-center text-slate-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
