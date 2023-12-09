import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Connect } from './Connect';

export default {
  title: 'Connect',
  component: Connect,
} as Meta;

const Template: Story = (args) => <Connect {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Connect',
  accountStatus: 'full',
};
