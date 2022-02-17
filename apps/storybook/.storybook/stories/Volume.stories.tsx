import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Volume } from '../components/Volume';

export default {
  title: 'Media/Volume',
  component: Volume,
} as Meta;

const Template: Story = (args) => <Volume {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 1,
  step: 'any',
};
