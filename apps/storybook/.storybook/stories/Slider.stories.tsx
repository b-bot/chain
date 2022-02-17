import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Slider } from '../components/Slider';

export default {
  title: 'Input/Slider',
  component: Slider,
} as Meta;

const Template: Story = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};
