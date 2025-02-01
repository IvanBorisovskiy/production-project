import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CountrySelect } from '../../../Country';
import { CurrencySelect } from '../../../Currency';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader/index';
import { TextAlign, Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [cls.error])}
            justify="center"
            max
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoading = () => {
    return (
        <HStack
            className={classNames(cls.ProfileCard, { [cls.loading]: true })}
            justify="center"
            max
        >
            <LoaderDeprecated />
        </HStack>
    );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            className={classNames(cls.ProfileCard, mods, [className])}
            gap="8"
            max
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard-firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard-lastname"
            />
            <InputDeprecated
                type="number"
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard-age"
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard-city"
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard-username"
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard-avatar"
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid="ProfileCard-currency"
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid="ProfileCard-country"
            />
        </VStack>
    );
};
