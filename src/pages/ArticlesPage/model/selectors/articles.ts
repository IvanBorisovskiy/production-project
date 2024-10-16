import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const articlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const articlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
