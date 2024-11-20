import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationIcon from 'shared/assets/icons/Vector-5.svg';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Card, CardTheme } from '../../../Card/Card';
import { Icon } from '../../../Icon/Icon';
import { Text } from '../../../Text/Text';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: (
        <Button theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    ),
    children: (
        <div style={{
            width: 500,
            height: 200,
            overflowY: 'auto',
        }}
        >
            <Card theme={CardTheme.OUTLINE} style={{ marginTop: 15 }}>
                <Text title="sadas" text="asdasd" />
            </Card>
            <Card theme={CardTheme.OUTLINE} style={{ marginTop: 15 }}>
                <Text title="sadas" text="asdasd" />
            </Card>
            <Card theme={CardTheme.OUTLINE} style={{ marginTop: 15 }}>
                <Text title="sadas" text="asdasd" />
            </Card>
            <Card theme={CardTheme.OUTLINE} style={{ marginTop: 15 }}>
                <Text title="sadas" text="asdasd" />
            </Card>
            <Card theme={CardTheme.OUTLINE} style={{ marginTop: 15 }}>
                <Text title="sadas" text="asdasd" />
            </Card>
        </div>
    ),

};
