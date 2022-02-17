import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField } from '../components/TextField';

export default {
  title: 'Input/TextField',
  component: TextField,
} as Meta;

const Template: Story = (args) => <TextField {...args} defaultValue="TextField" />;

export const Default = Template.bind({});
Default.args = { size: '$1' };
