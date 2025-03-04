import { HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    maxWidth?: boolean;
}

/**
 *  Устарел, используем новые компоненты из папки redesigned
 *  @deprecated
 */
export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        maxWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.maxWidth]: maxWidth,
    };

    return (
        <div
            className={classNames(cls.card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
