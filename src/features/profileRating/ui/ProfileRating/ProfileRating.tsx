import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = (props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const {
        data: profileRating,
        isLoading,
    } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        rateProfileMutation({
            profileId,
            rate: starsCount,
            userId: userData?.id || '',
            feedback,
        });
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    const rating = profileRating?.[0];

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль')}
            hasFeedback
            feedbackTitle={t('Напишите своё мнение по поводу данного профиля')}
        />
    );
};

export default memo(ProfileRating);
