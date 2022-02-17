import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tabs, TabsList, TabsTab, TabsPanel } from '../components/Tabs';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
} as Meta;

const Template: Story = (args) => (
  <Tabs defaultValue="tab-one" {...args}>
    <TabsList>
      <TabsTab value="tab-one">General</TabsTab>
      <TabsTab value="tab-two">Hosting</TabsTab>
      <TabsTab value="tab-three">Editor</TabsTab>
      <TabsTab value="tab-four">Billing</TabsTab>
      <TabsTab value="tab-five">SEO</TabsTab>
    </TabsList>
    <TabsPanel value="tab-one">Panel 1</TabsPanel>
    <TabsPanel value="tab-two">Panel 2</TabsPanel>
    <TabsPanel value="tab-three">Panel 3</TabsPanel>
    <TabsPanel value="tab-four">Panel 4</TabsPanel>
    <TabsPanel value="tab-five">Panel 5</TabsPanel>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
