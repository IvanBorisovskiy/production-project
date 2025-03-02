import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface scrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const {
        className,
    } = props;

    const onClick = () => {
        window.scrollTo(
            {
                behavior: 'smooth',
                top: 0,
            },
        );
    };

    return (
        <Icon
            className={classNames('', {}, [className])}
            Svg={CircleIcon}
            clickable
            onClickProps={onClick}
        />
    );
});
