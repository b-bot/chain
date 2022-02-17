import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextArea } from '../components/TextArea';

export default {
  title: 'Input/TextArea',
  component: TextArea,
} as Meta;

const Template: Story = (args) => <TextArea {...args} defaultValue="eihuweofjew" />;

export const Default = Template.bind({});
Default.args = {};
