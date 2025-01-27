import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    direction?: FlexDirection;
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        direction = 'row',
        onTabClick,
    } = props;

    const onClickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <Flex
            className={classNames(cls.tabs, {}, [className])}
            direction={direction}
            gap="8"
            align="start"
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;

                return (
                    <Card
                        data-testid={`ArticlesTypeTabs.${tab.value}`}
                        variant={isSelected ? 'light' : 'normal'}
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        key={tab.value}
                        onClick={onClickHandler(tab)}
                        border
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
