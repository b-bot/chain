import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Separator } from '../components/Separator';

export default {
  title: 'Layout/Separator',
  component: Separator,
} as Meta;

const Template: Story = (args) => <Separator {...args} />;

export const Default = Template.bind({});
Default.args = {};
