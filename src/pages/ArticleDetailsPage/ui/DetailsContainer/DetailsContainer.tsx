import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    return (
        <Card
            className={className}
            padding="24"
            border
            maxWidth
            maxHeight
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
