import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProgressBar } from '../components/ProgressBar';

export default {
  title: 'Status/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story = (args) => <ProgressBar value={80} max={100} {...args} />;

export const Default = Template.bind({});
Default.args = {};
