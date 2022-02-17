import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ScrollArea } from '../components/ScrollArea';

export default {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
} as Meta;

const Template: Story = (args) => (
  <ScrollArea {...args}>
    There are 5 variants to choose from. Use is for positive states. This is a link Traditional
    business literature won’t help you solve it- most of that stuff is focused on life after
    product/market fit, after the Trough of Sorrow. There are 5 variants to choose from. Use is for
    positive states. This is a link Traditional business literature won’t help you solve it- most of
    that stuff is focused on life after product/market fit, after the Trough of Sorrow. There are 5
    variants to choose from. Use is for positive states. This is a link Traditional business
    literature won’t help you solve it- most of that stuff is focused on life after product/market
    fit, after the Trough of Sorrow. There are 5 variants to choose from. Use is for positive
    states. This is a link Traditional business literature won’t help you solve it- most of that
    stuff is focused on life after product/market fit, after the Trough of Sorrow. There are 5
    variants to choose from. Use is for positive states. This is a link Traditional business
    literature won’t help you solve it- most of that stuff is focused on life after product/market
    fit, after the Trough of Sorrow. There are 5 variants to choose from. Use is for positive
    states. This is a link Traditional business literature won’t help you solve it- most of that
    stuff is focused on life after product/market fit, after the Trough of Sorrow. There are 5
    variants to choose from. Use is for positive states. This is a link Traditional business
    literature won’t help you solve it- most of that stuff is focused on life after product/market
    fit, after the Trough of Sorrow.
  </ScrollArea>
);

export const Default = Template.bind({});
Default.args = {};
