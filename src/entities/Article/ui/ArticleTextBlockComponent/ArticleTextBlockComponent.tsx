import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={className}>
            {block.title && (
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={<Text title={block.title} className={cls.title} />}
                    off={<TextDeprecated title={block.title} className={cls.title} />}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <ToggleFeaturesComponent
                    key={paragraph}
                    feature="isAppRedesigned"
                    on={(
                        <Text
                            key={paragraph}
                            className={cls.paragraph}
                            text={paragraph}
                            size="m"
                        />
                    )}
                    off={(
                        <TextDeprecated
                            key={paragraph}
                            className={cls.paragraph}
                            text={paragraph}
                            size={TextSize.M}
                        />
                    )}
                />
            ))}
        </div>
    );
});
