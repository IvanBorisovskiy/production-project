import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
