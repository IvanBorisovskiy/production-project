import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const {
        data: articles,
        isLoading,
        error,
    } = useArticleRecommendationsList(3);

    if (isLoading || !articles || error) {
        return null;
    }

    return (
        <VStack
            data-testId="ArticleDetails.Recommendations"
            gap="8"
            className={classNames('', {}, [className])}
        >
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={(
                    <Text
                        size="l"
                        title={t('Рекомендуем')}
                    />
                )}
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Рекомендуем')}
                    />
                )}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
