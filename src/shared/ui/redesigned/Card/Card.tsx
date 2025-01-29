import { HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    maxWidth?: boolean;
    padding?: CardPadding;
    border?: boolean;
}

const CardPaddingMap: Record<CardPadding, string> = {
    0: cls.padding_0,
    8: cls.padding_8,
    16: cls.padding_16,
    24: cls.padding_24,
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        maxWidth,
        padding = '8',
        border,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.maxWidth]: maxWidth,
        [cls.borderRound]: border,
    };

    const cardPadding = CardPaddingMap[padding];

    return (
        <div
            className={classNames(
                cls.card,
                mods,
                [cls[variant], cardPadding, className],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
