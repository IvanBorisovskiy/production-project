import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const ListBoxBottom = Template.bind({});
ListBoxBottom.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
};

export const ListBoxBottomRight = Template.bind({});
ListBoxBottomRight.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'bottom-right',
};

export const ListBoxBottomLeft = Template.bind({});
ListBoxBottomLeft.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'bottom-left',
};

export const ListBoxTop = Template.bind({});
ListBoxTop.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'top',
};

export const ListBoxTopLeft = Template.bind({});
ListBoxTopLeft.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'top-left',
};

export const ListBoxTopRight = Template.bind({});
ListBoxTopRight.args = {
    items: [
        { content: '1', value: '1' },
        { content: '2', value: '2' },
    ],
    defaultValue: 'Выберите опцию',
    direction: 'top-right',
};
