import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            content: 'IT',
            value: 'IT',
        },
        {
            content: 'Политика',
            value: 'Политика',
        },
        {
            content: 'Наука',
            value: 'Наука',
        },
    ],
    value: 'Политика',
    onTabClick: action('onTabClick'),
};
