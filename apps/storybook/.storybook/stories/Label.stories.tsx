import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Label } from '../components/Label';

export default {
  title: 'Input/Label',
  component: Label,
} as Meta;

const Template: Story = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});
Default.args = {};
