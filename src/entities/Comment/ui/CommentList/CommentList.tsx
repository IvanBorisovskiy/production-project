import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack max gap="8" className={classNames('', {}, [className])}>
                <CommentItem
                    isLoading
                />
                <CommentItem
                    isLoading
                />
                <CommentItem
                    isLoading
                />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentItem
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        on={<Text text={t('Комментарии отсутствуют')} />}
                        off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
                    />
                )}
        </VStack>
    );
});
