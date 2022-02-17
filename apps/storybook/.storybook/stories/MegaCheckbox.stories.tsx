import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MegaCheckbox } from '../components/MegaCheckbox';

export default {
  title: 'Input/MegaCheckbox',
  component: MegaCheckbox,
} as Meta;

const Template: Story = (args) => <MegaCheckbox {...args}>Mega</MegaCheckbox>;

export const Default = Template.bind({});
Default.args = {};
