<template>
	<main
		class="w-screen bg-soft-white px-5 py-7 text-dark-gray dark:bg-neutral-900 dark:text-soft-white sm:px-20 sm:py-10">
		<header class="flex w-full items-center justify-between">
			<h1 class="text-2xl font-bold"></h1>AI STREAMING
			<button class="rounded-md bg-dark-gray px-3 py-1 text-soft-white">LOGIN</button>
		</header>
		<section class="main-content">
			<slot />
		</section>
		<footer>
			<hr class="mx-2 mt-14 text-neutral-400 sm:mx-6" />
			<div class="mt-10 text-center">
				<h1 class="text-2xl font-bold"></h1>AI STREAMING
			</div>
		</footer>
	</main>
</template>

<style>
* {
	font-family: sans-serif;
}
</style>

<style scoped>
@media only screen and (min-width: 766px) {
	.main-content {
		min-height: calc(100vh - 16.82rem);
	}
}
</style>
