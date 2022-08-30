<script lang="ts">
	export let name: string;
	export let href: string;
</script>

<a
	class="py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	{href}
>
	{name}
</a>
