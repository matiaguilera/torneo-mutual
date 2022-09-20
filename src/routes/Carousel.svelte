<div class="sm:hidden slider border-y">
	<div class="slide-track">
		<div class="slide flex justify-center items-center pr-8">
			<img class="mx-8 w-44 object-scale-down" src="/sponsors/MN.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-10 w-22 object-scale-down" src="/sponsors/4RUEDAS.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-14 object-scale-down" src="/sponsors/AUTENTIC.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-8 w-44 object-scale-down" src="/sponsors/INGENIERIA.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-14 object-scale-down" src="/sponsors/Toretto.jpeg" alt="" />
		</div>

		<div class="slide flex justify-center items-center pr-8">
			<img class="mx-8 w-22 object-scale-down" src="/sponsors/MN.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-10 w-44 object-scale-down" src="/sponsors/4RUEDAS.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-28 object-scale-down" src="/sponsors/AUTENTIC.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-8 w-44 object-scale-down" src="/sponsors/INGENIERIA.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-14 object-scale-down" src="/sponsors/Toretto.jpeg" alt="" />
		</div>

		<div class="slide flex justify-center items-center pr-8">
			<img class="mx-8 w-22 object-scale-down" src="/sponsors/MN.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-10 w-22 object-scale-down" src="/sponsors/4RUEDAS.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-14 object-scale-down" src="/sponsors/AUTENTIC.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center">
			<img class="mx-8 w-44 object-scale-down" src="/sponsors/INGENIERIA.jpg" alt="" />
		</div>
		<div class="slide flex justify-center items-center px-8">
			<img class="mx-8 w-14 object-scale-down" src="/sponsors/Toretto.jpeg" alt="" />
		</div>
	</div>
</div>

<style>
	.slider {
		width: 100vw;
		height: auto;
		margin: auto;
		overflow: hidden;
	}

	.slider .slide-track {
		display: flex;
		animation: scroll 40s linear infinite;
		-webkit-animation: scroll 40s linear infinite;
		width: calc(100px * 12);
	}

	/* .slider .slide {
		width: 200px;
	} */

	.slider .slide img {
		width: 100%;
	}

	@keyframes scroll {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
		100% {
			-webkit-transform: translateX(calc(-200px * 4));
			transform: translateX(calc(-200px * 4));
		}
	}
</style>
