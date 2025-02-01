import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CountrySelect } from '../../../Country';
import { CurrencySelect } from '../../../Currency';
import cls from './ProfileCardRedesigned.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding="24" maxWidth>
            <HStack justify="center" max className={cls.skeletonAvatar}>
                <Skeleton width={128} height={128} border="100%" />
            </HStack>

            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                </VStack>

                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                    <Skeleton width="100%" height={38} border="48px" />
                </VStack>
            </HStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [cls.error])}
            justify="center"
            max
        >
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    return (
        <Card
            className={classNames(cls.ProfileCard, {}, [className])}
            padding="24"
            maxWidth
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar
                        src={data?.avatar}
                        size={128}
                    />
                </HStack>
            )}
            <HStack gap="24" max>
                <VStack gap="16" max>
                    <Input
                        label={t('Имя: ')}
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid="ProfileCard-firstname"
                    />
                    <Input
                        label={t('Фамилия: ')}
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        onChange={onChangeLastname}
                        readonly={readonly}
                        data-testid="ProfileCard-lastname"
                    />
                    <Input
                        label={t('Возраст: ')}
                        type="number"
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        onChange={onChangeAge}
                        readonly={readonly}
                        data-testid="ProfileCard-age"
                    />
                    <Input
                        label={t('Город: ')}
                        value={data?.city}
                        placeholder={t('Город')}
                        onChange={onChangeCity}
                        readonly={readonly}
                        data-testid="ProfileCard-city"
                    />
                </VStack>
                <VStack gap="16" max>
                    <Input
                        label={t('Имя пользователя: ')}
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        onChange={onChangeUsername}
                        readonly={readonly}
                        data-testid="ProfileCard-username"
                        labelClassname={cls.label}
                    />
                    <Input
                        label={t('Ссылка на аватар: ')}
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                        data-testid="ProfileCard-avatar"
                        labelClassname={cls.label}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                        data-testid="ProfileCard-currency"
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                        data-testid="ProfileCard-country"
                    />
                </VStack>
            </HStack>
        </Card>
    );
};
