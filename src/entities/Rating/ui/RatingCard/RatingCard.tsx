import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <>
                    <Text
                        title={feedbackTitle}
                    />
                    <Input
                        data-testId="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
            off={(
                <>
                    <TextDeprecated
                        title={feedbackTitle}
                    />
                    <InputDeprecated
                        data-testId="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
                    off={<TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title} />}
                />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <ToggleFeaturesComponent
                            feature="isAppRedesigned"
                            on={(
                                <HStack max gap="16" justify="end">
                                    <Button
                                        data-testId="RatingCard.Close"
                                        onClick={cancelHandler}
                                        variant="outline"
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testId="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            )}
                            off={(
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        data-testId="RatingCard.Close"
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testId="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeaturesComponent
                            feature="isAppRedesigned"
                            on={(
                                <Button
                                    onClick={acceptHandler}
                                    size="l"
                                    fullWidth
                                >
                                    {t('Отправить')}
                                </Button>
                            )}
                            off={(
                                <ButtonDeprecated onClick={acceptHandler} size={ButtonSize.L} fullWidth>
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            )}
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={(
                <Card
                    border
                    padding="24"
                    maxWidth
                    data-testId="RatingCard"
                >
                    {content}
                </Card>
            )}
            off={(
                <CardDeprecated className={className} maxWidth data-testId="RatingCard">
                    {content}
                </CardDeprecated>
            )}
        />
    );
});
