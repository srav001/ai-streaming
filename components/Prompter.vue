<script setup lang="ts">
const { data: models } = await usePrompter().getModels();

const { data: answer } = await usePrompter().getAnswer();
console.log(answer);
const input = shallowRef<undefined | string>(undefined);
</script>

<template>
	<section class="mt-5 rounded-lg border border-stone-400 dark:border-neutral-900">
		<article class="rounded-tl-lg rounded-tr-lg bg-neutral-800 p-4 text-neutral-400">
			<p class="text-xs">Prompt</p>
			<div class="mt-3 rounded-lg bg-neutral-600 p-4 text-white">
				<p class="mb-5">
					Given the following fruit, output the closest color hex value that matches the color of that fruit.
				</p>
				<div class="my-2">
					Fruit:
					<br />
					<span class="rounded-full bg-violet-500 px-[0.4rem] text-sm">fruit</span>
				</div>
				<div class="mt-3">
					Color hex string:
					<br />
					<span class="rounded-full border border-soft-white px-2 text-sm">completion</span>
				</div>
			</div>
			<p class="mt-5 text-soft-white">
				Tokens: 31
				<span class="cursor-pointer rounded-full bg-neutral-400/80 px-[0.27rem] text-sm text-neutral-800"
					>?</span
				>
			</p>
		</article>
		<article class="grid grid-cols-1 gap-5 bg-stone-100/95 p-5 text-stone-600 sm:grid-cols-2">
			<div class="text-stone-500">
				<p class="mb-4 text-xs font-thin">Inputs</p>
				<span class="rounded-full bg-violet-500 p-1 px-2 text-xs text-soft-white">fruit</span>
				<input
					v-model="input"
					type="text"
					class="mr-2 mt-3 w-full rounded border-0 p-3 text-xs text-black"
					placeholder="Enter a fruit" />
			</div>
			<div class="text-stone-600/90">
				<p class="mb-4 text-xs font-thin text-stone-500/90">Preview</p>
				<p class="mb-4 font-normal">
					Given the following fruit, output the closest color hex value that matches the color of that fruit
				</p>
				<div class="my-2 font-normal">
					Fruit:
					<br />
					<span class="text-sm font-medium text-violet-600">{{ input }}</span>
				</div>
				<div class="mt-3 font-normal">
					Color hex string:
					<br />
					<span class="rounded-full border border-stone-600/90 px-2 text-sm">completion</span>
				</div>
				<p class="mt-3">
					Tokens: 31
					<span class="cursor-pointer rounded-full bg-neutral-500 px-[0.27rem] text-sm text-soft-white"
						>?</span
					>
				</p>
			</div>
		</article>
		<footer
			class="grid grid-cols-1 gap-5 rounded-bl-lg rounded-br-lg border-t border-t-stone-400 bg-soft-white p-4 text-dark-gray dark:border-b-neutral-900 dark:border-l-neutral-900 dark:border-r-neutral-900 sm:grid-cols-2">
			<div class="flex items-center justify-center sm:justify-start">
				<div class="mr-5 text-stone-600">
					<span class="mr-2 text-xs">Family</span>
					<select class="rounded-full bg-stone-200 p-2 text-xs" value="gpt3" id="family">
						<option value="gpt3">GPT-3</option>
					</select>
				</div>
				<div class="text-xs text-stone-600">
					<span class="mr-2"> Model </span>
					<select class="rounded-full bg-stone-200 p-2" value="gpt3" id="family">
						<option value="gpt3">GPT-3</option>
					</select>
				</div>
			</div>
			<div class="flex items-center justify-center sm:justify-end">
				<div class="mr-3 hidden text-xs text-stone-300 sm:inline">
					<span class="rounded border p-1">key</span>
					+
					<span class="rounded border p-1">Enter</span>
				</div>
				<button
					class="mr-3 cursor-pointer rounded border border-dark-gray bg-dark-gray px-3 py-1 text-sm text-soft-white shadow-sm transition-all duration-300 ease-in-out hover:border-green-800 hover:bg-green-800 hover:text-white hover:shadow-lg">
					RUN
				</button>
				<button
					class="rounded border border-dark-gray px-3 py-1 text-sm text-dark-gray shadow-sm transition-all duration-300 ease-in-out hover:border-blue-800 hover:bg-purple-800 hover:text-white hover:shadow-lg">
					SAVE
				</button>
			</div>
		</footer>
	</section>
</template>
