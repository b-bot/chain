import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tooltip } from '../components/Tooltip';

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story = (args) => (
  <Tooltip
    {...args}
    content="Like how in Gmail, the search input is left aligned with the content you're searching. I don't think it works well to have a tiny search button hidden over in the corner, disjointed from the content you're searching."
    side="bottom"
    align="center"
    multiline
  >
    <button>Tooltip</button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {};
