import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Spinner } from '../components/Spinner';

export default {
  title: 'Status/Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { strokeWidth: 4, height: 20, width: 20 };
