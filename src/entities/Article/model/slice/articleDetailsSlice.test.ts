import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleBlockType, ArticleType } from '../consts/articleConsts';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    id: 'asd',
    title: 'asd',
    subtitle: 'asd',
    img: 'asd',
    createdAt: 'asd',
    user: {
        id: '1',
        username: 'Ivan',
        avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
    },
    type: [ArticleType.IT],
    views: 123,
    blocks: [{
        id: 'asd',
        type: ArticleBlockType.CODE,
        code: 'asd',
    }],
};

describe('articleDetailsSlice.ts', () => {
    test('test fetch article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'asd',
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
    test('test fetch article by id fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
