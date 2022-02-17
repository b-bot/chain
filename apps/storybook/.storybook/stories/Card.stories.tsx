import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card } from '../components/Card';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args}>Card</Card>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
};

export const Compact = Template.bind({});
Compact.args = {
  variant: 'compact',
};

export const Modal = Template.bind({});
Modal.args = {
  variant: 'modal',
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  variant: 'fullscreen',
};
