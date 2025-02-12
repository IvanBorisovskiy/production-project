import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

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
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
