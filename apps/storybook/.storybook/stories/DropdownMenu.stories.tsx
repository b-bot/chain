import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
} from '../components/DropdownMenu';

export default {
  title: 'Layout/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Choose one</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="one">
          <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};
