import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/Vector-2.svg';

import AboutIcon from '@/shared/assets/icons/Info.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItem = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => MainIcon,
                    off: () => AboutIconDeprecated,
                }),
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => AboutIcon,
                    off: () => MainIconDeprecated,
                }),
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ProfileIcon,
                        off: () => ProfileIconDeprecated,
                    }),
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ArticlesIcon,
                        off: () => ArticlesIconDeprecated,
                    }),
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
