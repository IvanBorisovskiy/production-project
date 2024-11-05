import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DropdownBottom = Template.bind({});
DropdownBottom.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
};

export const DropdownBottomRight = Template.bind({});
DropdownBottomRight.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
    direction: 'bottom-right',
};

export const DropdownBottomLeft = Template.bind({});
DropdownBottomLeft.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
    direction: 'bottom-left',
};

export const DropdownTop = Template.bind({});
DropdownTop.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
    direction: 'top',
};

export const DropdownTopLeft = Template.bind({});
DropdownTopLeft.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
    direction: 'top-left',
};

export const DropdownTopRight = Template.bind({});
DropdownTopRight.args = {
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    trigger: <Button>Open</Button>,
    direction: 'top-right',
};
