import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean
}
type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [
        cls[direction],
    ];

    return (
        <HStack gap="4">
            {label && (
                <span
                    className={classNames('', { [cls.disabledLabel]: readonly })}
                >
                    {`${label}:`}
                </span>
            )}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(cls.listBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListbox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    }, [])}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
