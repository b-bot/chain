import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar } from '../components/Avatar';

import image from './assets/avatar.png';

export default {
  title: 'Media/Avatar',
  component: Avatar,
} as Meta;

const Template: Story = (args) => <Avatar {...args} src={image} alt="Avatar" />;

export const Default = Template.bind({});
Default.args = {};
