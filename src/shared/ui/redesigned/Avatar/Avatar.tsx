import { CSSProperties, useMemo } from 'react';
import UserIcon from '@/shared/assets/icons/carbon_user-avatar-filled.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { HStack } from '../Stack';
import { Text } from '../Text';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    userName?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
        userName,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    if (userName) {
        return (
            <HStack gap="8">
                <AppImage
                    fallback={fallback}
                    errorFallback={errorFallback}
                    src={src}
                    alt={alt}
                    style={styles}
                    className={classNames(cls.Avatar, mods, [className])}
                />
                <Text text={userName} bold />
            </HStack>
        );
    }

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
