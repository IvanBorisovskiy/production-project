import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
            <div className={classNames(cls.commentItem, {}, [className])}>
                <div className={cls.header}>
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
                </div>
                <Skeleton
                    className={cls.text}
                    height={50}
                    width="100%"
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentItem, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar
                && (
                    <Avatar
                        size={30}
                        src={comment?.user.avatar}
                        className={cls.avatar}
                    />
                )}
                <Text className={cls.username} title={comment?.user.username} />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
