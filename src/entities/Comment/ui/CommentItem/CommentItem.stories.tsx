import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

const normalArgs = {
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

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })];

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
