/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
