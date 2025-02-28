import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.scrollToolbar, {}, [className])}
            justify="center"
            align="center"
            max
        >
            <ScrollToTopButton />
        </VStack>
    );
});
