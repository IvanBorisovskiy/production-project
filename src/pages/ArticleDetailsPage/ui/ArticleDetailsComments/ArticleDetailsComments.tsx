import {
    memo,
    Suspense, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { ArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {
        className,
        id,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(ArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack
            max
            gap="16"
            className={classNames('', {}, [className])}
        >
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={(
                    <Text
                        size="l"
                        title={t('Комментарии')}
                    />
                )}
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Комментарии')}
                    />
                )}
            />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                comments={comments}
                isLoading={commentsIsLoading}
            />
        </VStack>
    );
});
