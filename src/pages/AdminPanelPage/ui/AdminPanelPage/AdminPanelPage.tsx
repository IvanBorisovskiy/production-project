import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

export const AdminPanelPage = (props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            Админ панель
        </Page>
    );
};

export default memo(AdminPanelPage);
