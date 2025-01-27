import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/bi_list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/fe_tiled.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { toggleFeatures, ToggleFeaturesComponent } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(
            toggleFeatures(
                {
                    name: 'isAppRedesigned',
                    on: () => cls.ArticleViewSelectorRedesigned,
                    off: () => '',
                },
            ),
            {},
            [className],
        )}
        >
            {viewTypes.map((viewType) => (
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={(
                        <div className={classNames(
                            cls.iconWrapper,
                            {
                                [cls.SelectedLeft]: viewType.view === view && viewType.icon === ListIcon,
                                [cls.SelectedRight]: viewType.view === view && viewType.icon === TiledIcon,
                            },
                        )}
                        >
                            <Icon
                                clickable
                                onClickProps={onClick(viewType.view)}
                                width={32}
                                height={32}
                                Svg={viewType.icon}
                                className={cls.icon}
                            />
                        </div>
                    )}
                    off={(
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                            />
                        </ButtonDeprecated>
                    )}
                />
            ))}
        </div>
    );
});
