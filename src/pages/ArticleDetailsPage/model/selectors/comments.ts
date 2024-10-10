import { StateSchema } from 'app/providers/StoreProvider';

export const ArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const ArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
