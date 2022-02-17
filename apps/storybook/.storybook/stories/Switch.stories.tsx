import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Switch } from '../components/Switch';

export default {
  title: 'Input/Switch',
  component: Switch,
} as Meta;

const Template: Story = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};
