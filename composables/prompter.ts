async function getModels() {
	return await $fetch('/api/models');
}

async function getAnswer() {
	return await useFetch('/api/prompt');
}

export function usePrompter() {
	return {
		getModels,
		getAnswer
	};
}
