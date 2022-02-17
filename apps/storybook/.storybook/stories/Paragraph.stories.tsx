import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Paragraph } from '../components/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story = (args) => <Paragraph {...args}>Paragraph</Paragraph>;

export const Default = Template.bind({});
Default.args = {};
