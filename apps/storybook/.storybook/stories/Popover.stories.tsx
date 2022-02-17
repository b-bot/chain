import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Popover, PopoverTrigger, PopoverContent } from '../components/Popover';

export default {
  title: 'Overlays/Popover',
  component: Popover,
} as Meta;

const Template: Story = (args) => (
  <Popover {...args}>
    <PopoverTrigger interactive fallback="J">
      Trigger
    </PopoverTrigger>
    <PopoverContent css={{ padding: '$3' }}>
      The other main improvement is with tables, which we'll probably use a lot. With horizontal
      overflow on small devices and when zoomed in.
    </PopoverContent>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {};
