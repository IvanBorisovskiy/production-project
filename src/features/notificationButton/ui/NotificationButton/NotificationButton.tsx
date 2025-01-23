import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/Vector-5.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import cls from './NotificationButton.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <Icon
                    Svg={NotificationIcon}
                    clickable
                    onClickProps={onOpenDrawer}
                />
            )}
            off={(
                <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                    <IconDeprecated inverted Svg={NotificationIconDeprecated} />
                </ButtonDeprecated>
            )}
        />

    );

    return (
        <div>
            <BrowserView>
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={(
                        <Popover
                            className={classNames(cls.notificationButton, {}, [className])}
                            trigger={trigger}
                            direction="bottom-left"
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    )}
                    off={(
                        <PopoverDeprecated
                            className={classNames(cls.notificationButton, {}, [className])}
                            trigger={trigger}
                            direction="bottom-left"
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    )}
                />

            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
