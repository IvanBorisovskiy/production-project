import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';
import { toggleFeatures, ToggleFeaturesComponent } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

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
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <Card padding="24" border maxWidth>
                    <VStack
                        data-testId="CommentItem.Content"
                        gap="8"
                        max
                        className={classNames(cls.commentItemRedesigned, {}, [className])}
                    >
                        <AppLink to={`${getRouteProfile(comment?.user.id)}`}>
                            <HStack gap="8">
                                {comment?.user.avatar
                && (
                    <Avatar
                        size={30}
                        src={comment?.user.avatar}
                    />
                )}
                                <Text title={comment?.user.username} bold />
                            </HStack>
                        </AppLink>
                        <Text text={comment?.text} />
                    </VStack>
                </Card>
            )}
            off={(
                <VStack
                    data-testId="CommentItem.Content"
                    gap="8"
                    max
                    className={classNames(cls.commentItem, {}, [className])}
                >
                    <AppLinkDeprecated to={`${getRouteProfile(comment?.user.id)}`}>
                        <HStack>
                            {comment?.user.avatar
                && (
                    <AvatarDeprecated
                        size={30}
                        src={comment?.user.avatar}
                        className={cls.avatar}
                    />
                )}
                            <TextDeprecated className={cls.username} title={comment?.user.username} />
                        </HStack>
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment?.text} />
                </VStack>
            )}
        />
    );
});
