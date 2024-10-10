import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'asd',
        user: {
            id: '1',
            username: 'Ivan',
            avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
        },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: '1',
        text: 'asd',
        user: {
            id: '1',
            username: 'Ivan',
            avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
        },
    },
    isLoading: true,
};
