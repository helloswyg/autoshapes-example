import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LineExample } from './LineExample';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shape Lib/LineExample',
  component: LineExample,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   fill: { control: 'color' },
  // },
} as ComponentMeta<typeof LineExample>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LineExample> = (args) => (
  <div style={{ width: '10em', height: '10em' }}>
    <LineExample />
  </div>
);

export const AutoGenerateLine = Template.bind({});
