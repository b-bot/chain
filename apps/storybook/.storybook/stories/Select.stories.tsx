import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select } from '../components/Select';

export default {
  title: 'Input/Select',
  component: Select,
} as Meta;

const Template: Story = (args) => (
  <Select {...args}>
    <option value="option1" label="Brightness">
      Brightness
    </option>
    <option value="option2" label="Contrast">
      Contrast
    </option>
    <option value="option3" label="Detail">
      Detail
    </option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};
