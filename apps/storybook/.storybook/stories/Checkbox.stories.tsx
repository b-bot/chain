import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = { size: 2 };
