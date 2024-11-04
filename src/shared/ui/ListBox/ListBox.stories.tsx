import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const DropdownBottom = Template.bind({});
DropdownBottom.args = {
    items: [
        {
            value: '1',
            content: '1',
            disabled: false,
        },
        {
            value: '2',
            content: '2',
            disabled: false,
        },
        {
            value: '3',
            content: '3',
            disabled: true,
        },
    ],
    defaultValue: 'Выберите опцию',
};

export const DropdownTop = Template.bind({});
DropdownTop.args = {
    items: [
        {
            value: '1',
            content: '1',
            disabled: false,
        },
        {
            value: '2',
            content: '2',
            disabled: false,
        },
        {
            value: '3',
            content: '3',
            disabled: true,
        },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'top',
};
