import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const props = {
        onChange: onChangeHandler,
        className,
        defaultValue: t('Страна'),
        items: options,
        readonly,
        value,
        label: t('Страна'),
    };

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <ListBox
                    direction="top"
                    {...props}
                />
            )}
            off={(
                <ListBoxDeprecated
                    direction="top"
                    {...props}
                />
            )}
        />
    );
});
