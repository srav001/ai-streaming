import { Configuration, OpenAIApi } from 'openai';
import question from './api/question';

const runTimeConfig = useRuntimeConfig();

console.log('runtime-config : ', runTimeConfig.openAiKey, '\n', 'org : ', runTimeConfig.orgId);

const openai = new OpenAIApi(
	new Configuration({
		organization: runTimeConfig.orgId,
		apiKey: runTimeConfig.openAiKey
	})
);

useRuntimeConfig().openAiKey;

export async function getEngines() {
	try {
		return (await openai.listEngines()).data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getModels() {
	try {
		return (await openai.listModels()).data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function getAnswer({ fruit, model }: { fruit: string; model: string }) {
	try {
		const completion = await openai.createChatCompletion({
			model,
			messages: [
				{
					role: 'user',
					content: question + 'Only the HEX code is needed.'
				},
				{
					role: 'user',
					content: `The fruit is ${fruit}`
				}
			]
		});

		return completion.data.choices[0].message?.content ?? 'No answer found';
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
