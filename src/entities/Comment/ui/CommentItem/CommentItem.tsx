import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                data-testId="CommentItem.Loading"
                gap="8"
                max
                className={classNames(cls.commentItem, {}, [className, cls.loading])}
            >
                <HStack max className={cls.header}>
                    <Skeleton
                        border="50%"
                        width={30}
                        height={30}
                    />
                    <Skeleton
                        className={cls.username}
                        height={16}
                        width={100}
                    />
                </HStack>
                <Skeleton
                    className={cls.text}
                    height={50}
                    width="100%"
                />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <VStack
            data-testId="CommentItem.Content"
            gap="8"
            max
            className={classNames(cls.commentItem, {}, [className])}
        >
            <AppLink to={`${getRouteProfile(comment?.user.id)}`}>
                <HStack>
                    {comment?.user.avatar
                && (
                    <Avatar
                        size={30}
                        src={comment?.user.avatar}
                        className={cls.avatar}
                    />
                )}
                    <Text className={cls.username} title={comment?.user.username} />
                </HStack>
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
