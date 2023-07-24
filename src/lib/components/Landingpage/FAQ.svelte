<svelte:head>
	<script src="dist/script.js" />
</svelte:head>

<section class="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
	<div>
		<h2 class="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">FAQ</h2>
	</div>

	<div toggleElement class="w-full py-4">
		<div class="flex justify-between items-center">
			<div question class="font-montserrat font-medium mr-auto">
				Where can I get this HTML template?
			</div>
			<img src="dist/assets/logos/CaretRight.svg" alt="" class="transform transition-transform" />
		</div>
		<div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
			You can download it on Gumroad.com
		</div>
	</div>
	<hr class="w-full bg-white" />

	<div toggleElement class="w-full py-4">
		<div class="flex justify-between items-center">
			<div question class="font-montserrat font-medium mr-auto">Is this HTML template free?</div>
			<img src="dist/assets/logos/CaretRight.svg" alt="" class="transform transition-transform" />
		</div>
		<div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
			Yes! For you it is free.
		</div>
	</div>
	<hr class="w-full bg-white" />

	<div toggleElement class="w-full py-4">
		<div class="flex justify-between items-center">
			<div question class="font-montserrat font-medium mr-auto">Am I awesome?</div>
			<img src="dist/assets/logos/CaretRight.svg" alt="" class="transform transition-transform" />
		</div>
		<div answer class="font-montserrat text-sm font-extralight pb-8 hidden">
			Yes! No doubt about it.
		</div>
	</div>
	<hr class="w-full bg-white" />
</section>
