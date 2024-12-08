import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ProfileRatingLazy {...props} />
    </Suspense>
);
