import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = ({ PayloadNumber }: {PayloadNumber: number}) => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const {
        add,
        decrement,
        increment,
    } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddNumber = (payload: number) => () => {
        add(payload);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('decrement')}
            </Button>
            <Button
                onClick={handleAddNumber(PayloadNumber)}
            >
                {t(`add ${PayloadNumber}`)}
            </Button>
        </div>
    );
};
