async function getModels() {
	return await useFetch('/api/models');
}

async function getAnswer(fruit: string, model: string): Promise<string> {
	return await $fetch('/api/prompt', {
		query: {
			fruit,
			model
		}
	});
}

export function usePrompter() {
	return {
		getModels,
		getAnswer,
		getTokens() {
			return JSON.parse(localStorage.getItem('tokens') ?? '10') as number;
		},
		setTokens(tokens: number) {
			localStorage.setItem('tokens', JSON.stringify(tokens));
		}
	};
}
