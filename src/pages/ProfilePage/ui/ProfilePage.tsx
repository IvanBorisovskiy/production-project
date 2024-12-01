import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import {
    EditableProfileCard,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const userData = useSelector(getUserAuthData);

    const visibleRating = id !== userData?.id;

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
            {visibleRating && <ProfileRating profileId={id} />}
        </Page>
    );
};

export default ProfilePage;
