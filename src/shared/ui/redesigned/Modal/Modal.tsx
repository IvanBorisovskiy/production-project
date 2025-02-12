import { ReactNode } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();
    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const modalCls = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.modalNew,
        off: () => cls.modalOld,
    });

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames(
                cls.Modal,
                mods,
                [className, theme, 'app_modal', modalCls],
            )}
            >
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
