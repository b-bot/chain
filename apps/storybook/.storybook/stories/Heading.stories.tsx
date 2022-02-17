import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading } from '../components/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story = (args) => <Heading {...args}>Heading</Heading>;

export const H1 = Template.bind({});
H1.args = {
  as: 'h1',
  size: 4,
};

export const H2 = Template.bind({});
H2.args = {
  as: 'h2',
  size: 3,
};

export const H3 = Template.bind({});
H3.args = {
  as: 'h3',
  size: 2,
};

export const H4 = Template.bind({});
H4.args = {
  as: 'h4',
  size: 1,
};
