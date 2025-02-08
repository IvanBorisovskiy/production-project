import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable ? [{
            content: t('Админка'),
            href: getRouteAdminPanel(),
        }] : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <Dropdown
                    items={items}
                    trigger={<Avatar src={authData.avatar} size={40} />}
                    direction="bottom-left"
                />
            )}
            off={(
                <DropdownDeprecated
                    items={items}
                    trigger={<AvatarDeprecated fallbackInverted src={authData.avatar} size={30} />}
                    direction="bottom-left"
                />
            )}
        />

    );
});
