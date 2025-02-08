import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className,
    } = props;

    const {
        data: notifications,
        isLoading,
    } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.notificationList, {}, [className])}
                gap="16"
                max
            >
                <Skeleton height="80px" width="100%" border="9px" />
                <Skeleton height="80px" width="100%" border="9px" />
                <Skeleton height="80px" width="100%" border="9px" />
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames(cls.notificationList, {}, [className])}
            gap="16"
            max
        >
            {notifications?.map((notification) => (
                <NotificationItem
                    notification={notification}
                    key={notification.id}
                />
            ))}
        </VStack>
    );
});
