import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                on={(
                    <Card padding="24" border maxWidth>
                        <HStack
                            data-testid="Article.CommentForm"
                            max
                            justify="between"
                            gap="16"
                            className={classNames(cls.addCommentFormRedesigned, {}, [className])}
                        >
                            <Input
                                data-testid="CommentFormInput"
                                placeholder={t('Введите текст комментария')}
                                onChange={onCommentTextChange}
                                value={text}
                                className={cls.input}
                            />
                            <Button
                                data-testid="CommentFormButton"
                                variant="outline"
                                onClick={onSendHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                )}
                off={(
                    <HStack
                        data-testid="Article.CommentForm"
                        max
                        justify="between"
                        className={classNames(cls.addCommentForm, {}, [className])}
                    >
                        <InputDeprecated
                            data-testid="CommentFormInput"
                            placeholder={t('Введите текст комментария')}
                            onChange={onCommentTextChange}
                            value={text}
                            className={cls.input}
                        />
                        <ButtonDeprecated
                            data-testid="CommentFormButton"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                )}
            />
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
