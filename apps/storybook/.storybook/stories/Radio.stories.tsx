import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RadioGroup, Radio } from '../components/Radio';
import { Label } from '../components/Label';

export default {
  title: 'Input/Radio',
  component: Radio,
} as Meta;

const Template: Story = (args) => (
  <RadioGroup defaultValue="1" {...args}>
    <Radio value="1" id="one" />
    <Label htmlFor="one">One</Label>
    <Radio value="2" id="two" />
    <Label htmlFor="two">Two</Label>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {};
