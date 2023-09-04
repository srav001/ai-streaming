import { getAnswer } from '../open-ai';

export default defineEventHandler<{
	query: {
		fruit: string;
		model: string;
	};
}>(async event => {
	return await getAnswer(getQuery(event));
});
