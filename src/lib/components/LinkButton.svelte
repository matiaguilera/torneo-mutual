<script lang="ts">
	export let name: string;
	export let href: string;
</script>

<a
	class="py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
	{href}
>
	{name}
</a>
