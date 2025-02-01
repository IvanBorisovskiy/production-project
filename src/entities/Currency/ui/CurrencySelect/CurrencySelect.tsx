import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const props = {
        className,
        defaultValue: t('Валюта'),
        items: options,
        onChange: onChangeHandler,
        readonly,
        value,
        label: t('Валюта'),
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
