import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '../../../assets/icons/Vector-6.svg';
import { Icon as IconDeprecated } from '../Icon/Icon';
import cls from './StarRating.module.scss';
import { toggleFeatures, ToggleFeaturesComponent } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const starRatingCls = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.StarRatingRedesigned,
        off: () => cls.StarRating,
    });

    return (
        <div className={classNames(starRatingCls, {}, [className])}>
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        {
                            [cls.selected]: isSelected,
                            [cls.hovered]: starNumber <= currentStarsCount,
                        },
                    ),
                    width: size,
                    height: size,
                    Svg: StarIcon,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };

                return (
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        key={starNumber}
                        on={(
                            <Icon
                                {...commonProps}
                            />
                        )}
                        off={(
                            <IconDeprecated
                                {...commonProps}
                            />
                        )}
                    />
                );
            })}
        </div>
    );
});
