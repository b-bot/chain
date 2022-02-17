import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';

export default {
  title: 'Overlays/Dialog',
  component: Dialog,
} as Meta;

const Template: Story = (args) => (
  <Dialog {...args}>
    <DialogTrigger>Open dialog</DialogTrigger>
    <DialogContent>
      There are 5 variants to choose from. Use is for positive states. This is a link Traditional
      business literature won’t help you solve it- most of that stuff is focused on life after
      product/market fit, after the Trough of Sorrow.
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {};
