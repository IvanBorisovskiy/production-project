import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

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
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListbox.Button as="div" className={popupCls.trigger}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
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
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    }, [])}
                                >
                                    {selected}
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
