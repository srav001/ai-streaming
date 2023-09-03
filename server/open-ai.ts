import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(
	new Configuration({
		organization: 'org-Ax838ryd5vEngR6Clkvh54Ie',
		apiKey: process.env.OPENAI_API_KEY
	})
);

export async function getEngines() {
	const response = await openai.listEngines();
	return response.data.data;
}

export async function getModels() {
	const response = await openai.listModels();
	return response.data.data;
}

export async function getAnswer() {
	try {
		const completion = await openai.createCompletion({
			model: 'davinci',
			prompt: 'Hello world'
		});

		console.log(completion.data);
		return completion.data.choices[0].text;
	} catch (error) {
		const apiError = error as unknown as any;
		if (apiError.response) {
			console.log(apiError.response.status);
			console.log(apiError.response.data);
		} else {
			console.log(apiError.message);
		}
	}
}
