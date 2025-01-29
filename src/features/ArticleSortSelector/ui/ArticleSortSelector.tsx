import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import cls from './ArticleSortSelector.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дата загрузки'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам'),
        },
    ], [t]);

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <div className={classNames(cls.articleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8">
                        <Text text={t('Сортировать по:')} />
                        <ListBox
                            items={sortFieldOptions}
                            onChange={onChangeSort}
                            value={sort}
                        />
                        <ListBox
                            items={orderOptions}
                            onChange={onChangeOrder}
                            value={order}
                        />
                    </VStack>
                </div>
            )}
            off={(
                <div className={classNames(cls.articleSortSelector, {}, [className])}>
                    <Select
                        label={t('Сортировать ПО')}
                        options={sortFieldOptions}
                        onChange={onChangeSort}
                        value={sort}
                    />
                    <Select
                        className={cls.order}
                        label={t('по')}
                        options={orderOptions}
                        onChange={onChangeOrder}
                        value={order}
                    />
                </div>
            )}
        />

    );
});
