import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

export default {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.ALL,
};
