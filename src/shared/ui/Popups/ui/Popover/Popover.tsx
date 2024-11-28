import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { classNames } from '../../../../lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom',
        children,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            <HPopover.Button
                className={popupCls.trigger}
                as="div"
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, optionsClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
