import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid } from '../components/Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta;

const Template: Story = (args) => (
  <Grid {...args}>
    <div>Grid</div>
    <div>Grid</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  align: 'center',
  columns: 1,
  gap: 2,
  gapX: 1,
  gapY: 1,
};
