import { getAnswer } from '../open-ai';

export default defineEventHandler(async event => await getAnswer());
