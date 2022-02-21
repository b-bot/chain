import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Input/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Neu = Template.bind({});
Neu.args = {
  variant: 'neu',
  size: 'large',
  label: 'Button',
};

export const Contrast = Template.bind({});
Contrast.args = {
  variant: 'contrast',
  size: 'large',
  label: 'Button',
};

export const Purple = Template.bind({});
Purple.args = {
  variant: 'purple',
  size: 'large',
  label: 'Button',
};

export const Pink = Template.bind({});
Pink.args = {
  variant: 'pink',
  size: 'large',
  label: 'Button',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
  size: 'large',
  label: 'Button',
};

export const Quiet = Template.bind({});
Quiet.args = {
  variant: 'quiet',
  label: 'Button',
};

export const Avatar = Template.bind({});
Avatar.args = {
  variant: 'avatar',
  label: 'Button',
};
