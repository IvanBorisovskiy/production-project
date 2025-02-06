import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            target={target}
            key={article.id}
        />
    );

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text
                    title={t('Статьи не найдены')}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <HStack
                    gap="8"
                    wrap="wrap"
                    className={classNames(cls.articleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                >
                    {
                        articles?.length
                            ? articles?.map(renderArticle)
                            : null
                    }
                    {
                        isLoading && getSkeletons(view)
                    }
                </HStack>
            )}
            off={(
                <div
                    className={classNames(cls.articleList, {}, [className, cls[view]])}
                    data-testid="ArticleList"
                >
                    {
                        articles?.length
                            ? articles?.map(renderArticle)
                            : null
                    }
                    {
                        isLoading && getSkeletons(view)
                    }
                </div>
            )}
        />
    );
});
