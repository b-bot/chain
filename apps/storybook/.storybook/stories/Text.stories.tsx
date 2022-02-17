import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text } from '../components/Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta;

const Template: Story = (args) => <Text {...args}>Text</Text>;

export const Contrast = Template.bind({});
Contrast.args = {
  variant: 'contrast',
};

export const Purple = Template.bind({});
Purple.args = {
  variant: 'purple',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  variant: 'green',
};

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
};

export const Orange = Template.bind({});
Orange.args = {
  variant: 'orange',
};

export const Pink = Template.bind({});
Pink.args = {
  variant: 'pink',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'red',
  error: true,
};
