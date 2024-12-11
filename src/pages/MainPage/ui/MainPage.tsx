import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter PayloadNumber={10} />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
