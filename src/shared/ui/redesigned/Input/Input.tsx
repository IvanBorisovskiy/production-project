import React, {
    InputHTMLAttributes, memo, ReactElement, useEffect, useRef,
    useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    size?: InputSize;
    labelClassname?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        size = 'm',
        label,
        labelClassname,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused && !readonly,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, mods, [className, cls[size]])}
        >
            {addonLeft
            && (
                <div className={cls.addonLeft}>
                    {addonLeft}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                className={cls.input}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            {addonRight
            && (
                <div className={cls.addonRight}>
                    {addonRight}
                </div>
            )}
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text className={classNames('', { [cls.readonly]: readonly }, [labelClassname])} text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});
