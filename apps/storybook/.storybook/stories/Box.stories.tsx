import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from '../components/Box';

export default {
  title: 'Layout/Box',
  component: Box,
} as Meta;

const Template: Story = (args) => <Box {...args}>Box</Box>;

export const Default = Template.bind({});
Default.args = {};
