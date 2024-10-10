import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'asd',
            user: {
                id: '1',
                username: 'Ivan',
                avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
            },
        },
        {
            id: '2',
            text: 'asdasd',
            user: {
                id: '2',
                username: 'John',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            },
        },
    ],
};

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
