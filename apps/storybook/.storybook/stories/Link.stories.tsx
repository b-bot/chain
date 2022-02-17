import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Link } from '../components/Link';

export default {
  title: 'Typography/Link',
  component: Link,
} as Meta;

const Template: Story = (args) => <Link {...args}>Link</Link>;

export const Default = Template.bind({});
Default.args = {};

export const Nav = Template.bind({});
Nav.args = {
  variant: 'nav',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
};
