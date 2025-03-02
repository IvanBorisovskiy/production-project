import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const PrimaryArgs = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'abcd',
        first: 'abb',
        city: 'asd',
        currency: Currency.RUB,
        avatar,
    },
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = PrimaryArgs;
DarkRedesigned.decorators = [
    FeaturesFlagsDecorator({ isAppRedesigned: true }),
    NewDesignDecorator,
];

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
