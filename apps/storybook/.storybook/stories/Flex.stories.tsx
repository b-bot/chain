import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex } from '../components/Flex';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

const Template: Story = (args) => <Flex {...args}>Flex</Flex>;

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  align: 'stretch',
  justify: 'start',
  wrap: 'noWrap',
};
