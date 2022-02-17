import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton } from '../components/IconButton';

export default {
  title: 'Input/IconButton',
  component: IconButton,
} as Meta;

const Template: Story = (args) => <IconButton {...args}>+</IconButton>;

export const Default = Template.bind({});
Default.args = {};
