import { getModels } from '../open-ai';

export default defineEventHandler(async () => await getModels());
