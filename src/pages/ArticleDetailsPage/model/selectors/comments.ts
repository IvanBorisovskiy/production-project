import { StateSchema } from 'app/providers/StoreProvider';

export const ArticleCommentsIsLoading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading;
export const ArticleCommentsError = (state: StateSchema) => state.ArticleDetailsComments?.error;
