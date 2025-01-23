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
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        maxWidth,
        padding = '8',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.maxWidth]: maxWidth,
    };

    return (
        <div
            className={classNames(
                cls.card,
                mods,
                [className, cls[variant]],
            )}
            style={{
                padding: `${padding}px`,
            }}
            {...otherProps}
        >
            {children}
        </div>
    );
};
