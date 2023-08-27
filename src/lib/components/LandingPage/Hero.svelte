<script>
	import { goto } from '$app/navigation';

	const goToApp = () => {
		goto('/app/install');
	};
</script>

<section
	class="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary"
>
	<div class="md:flex-1 md:mr-10">
		<h1 class="font-pt-serif text-5xl font-bold mb-7">
			A headline for your
			<span class="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%"> cool website </span>
		</h1>
		<p class="font-pt-serif font-normal mb-7">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum tempore consectetur
			voluptas, cumque nobis laboriosam voluptatem.
		</p>
		<div class="font-montserrat">
			<button
				class="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2"
				on:click={goToApp}
			>
				Install app
			</button>
		</div>
	</div>
	<div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
		<div class="relative">
			<img src="dist/assets/Highlight1.svg" alt="" class="absolute -top-16 -left-10" />
		</div>
		<img src="dist/assets/MacBook Pro.png" alt="Macbook" />
		<div class="relative">
			<img src="dist/assets/Highlight2.svg" alt="" class="absolute -bottom-10 -right-6" />
		</div>
	</div>
</section>
