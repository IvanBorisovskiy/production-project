import { StateSchema } from '@/app/providers/StoreProvider';

export const ArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const ArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
