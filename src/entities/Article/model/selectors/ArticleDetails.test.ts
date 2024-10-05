import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './ArticleDetails';
import { ArticleBlockType, ArticleType } from '../types/article';

describe('getProfileData.test', () => {
    test('getData', () => {
        const data = {
            id: '1',
            title: 'asd',
            subtitle: 'asd',
            img: 'asd',
            createdAt: 'asd',
            type: [ArticleType.IT],
            views: 123,
            blocks: [{
                type: ArticleBlockType.CODE,
                code: 'asd',
            }],
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('getError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
    test('getIsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
