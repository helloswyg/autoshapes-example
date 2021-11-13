import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackgroundBlob } from './BackgroundBlob';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shape Lib/BackgroundBlob',
  component: BackgroundBlob,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fill: { control: 'color' },
  },
} as ComponentMeta<typeof BackgroundBlob>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackgroundBlob> = (args) => <BackgroundBlob {...args} />;

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  numPoints: 5,
  fill: '#aaaaaa' ,
};
