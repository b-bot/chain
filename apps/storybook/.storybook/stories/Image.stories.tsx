import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Image } from '../components/Image';

import image from './assets/asteroids.png';

export default {
  title: 'Media/Image',
  component: Image,
} as Meta;

const Template: Story = (args) => <Image {...args} src={image} alt="Alt Text" />;

export const Default = Template.bind({});
Default.args = {};
