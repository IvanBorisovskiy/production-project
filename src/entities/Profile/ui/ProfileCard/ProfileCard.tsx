import { Country } from '../../../Country/model/types/country';
import { Currency } from '../../../Currency/model/types/currency';
import { Profile } from '../../model/types/profile';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoading,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        isLoading,
        error,
    } = props;

    if (isLoading) {
        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedLoading />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />

        );
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <ProfileCardRedesigned {...props} />
            )}
            off={(
                <ProfileCardDeprecated {...props} />
            )}
        />
    );
};
