import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const {
        className,
    } = props;

    const {
        sort,
        order,
        search,
        type,
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            type={type}
            sort={sort}
            search={search}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
        />
    );
});
