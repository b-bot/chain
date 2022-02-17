import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Donut } from '../components/Donut';

export default {
  title: 'Status/Donut',
  component: Donut,
} as Meta;

const Template: Story = (args) => <Donut {...args} />;

export const Default = Template.bind({});
Default.args = { min: 0, max: 100, value: 50, height: 128, width: 128, strokeWidth: 2 };
