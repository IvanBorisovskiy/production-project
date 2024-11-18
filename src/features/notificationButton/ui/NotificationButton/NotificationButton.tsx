import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import NotificationIcon from 'shared/assets/icons/Vector-5.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
            direction="bottom-left"
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
