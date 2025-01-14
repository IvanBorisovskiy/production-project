import { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.bottom,
    'bottom-left': cls['bottom-left'],
    'bottom-right': cls['bottom-right'],

    top: cls.top,
    'top-left': cls['top-left'],
    'top-right': cls['top-right'],
};
