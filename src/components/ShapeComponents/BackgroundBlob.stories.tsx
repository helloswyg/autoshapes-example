import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackgroundBlob } from './BackgroundBlob';
import { simpleLinearGradient } from '../../lib/shapelib/utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shape Lib/BackgroundBlob',
  component: BackgroundBlob,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   fill: { control: 'color' },
  // },
} as ComponentMeta<typeof BackgroundBlob>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackgroundBlob> = (args) => (
  <div style={{ width: '10em', height: '10em' }}>
    <BackgroundBlob {...args} />
  </div>
);

export const Filled = Template.bind({});
Filled.args = {
  numPoints: 5,
  fill: '#aaaaaa',
};

export const Gradient = Template.bind({});
Gradient.args = {
  numPoints: 5,
  fill: simpleLinearGradient(['red', 'blue']),
};

// export const Gradient = (numPoints: number, colors: string[]) => (
//   <div style={{ width: '10em', height: '10em' }}>
//   <BackgroundBlob numPoints={numPoints}  />
// </div>
// )
// Gradient.args = {
//   numPoints:4
// }