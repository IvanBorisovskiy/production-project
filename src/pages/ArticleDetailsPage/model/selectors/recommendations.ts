import { StateSchema } from 'app/providers/StoreProvider';

export const ArticleRecommendationsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading || false;
export const ArticleRecommendationsError = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.error;
