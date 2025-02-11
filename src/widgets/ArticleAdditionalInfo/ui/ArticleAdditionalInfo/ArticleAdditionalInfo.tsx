import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const {
        className,
        author,
        createdAt,
        views,
        onEdit,
    } = props;

    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.articleAdditionalInfo, {}, [className])}
            gap="32"
        >
            <HStack gap="8">
                <Avatar
                    src={author.avatar}
                    userName={author.username}
                    size={32}
                />
                <Text text={createdAt} />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});
