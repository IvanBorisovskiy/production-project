import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img
                src={block.src}
                alt={block.title}
                className={cls.img}
            />
            {block.title && (
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={(
                        <Text
                            text={block.title}
                            align="center"
                            size="m"
                        />
                    )}
                    off={(
                        <TextDeprecated
                            text={block.title}
                            align={TextAlign.CENTER}
                            size={TextSize.M}
                        />
                    )}
                />
            )}
        </div>
    );
});
