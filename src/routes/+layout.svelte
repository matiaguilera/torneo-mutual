<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Tab from './Tab.svelte';
	import Footer from './Footer.svelte';
	import Sponsors from './Sponsors.svelte';
	import Carousel from './Carousel.svelte';
</script>

<Header />
<Carousel />
<Tab />
<slot />
<Sponsors />
<Footer />
