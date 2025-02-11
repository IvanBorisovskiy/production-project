import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={(
                    <StickyContentLayout
                        content={(
                            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        )}
                        right={<AdditionalInfoContainer />}
                    />
                )}
                off={(
                    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ArticleRating articleId={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                )}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
