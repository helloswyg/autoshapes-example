import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VariableLine } from './VariableLine';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shape Lib/Variable Line',
  component: VariableLine,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stroke: { control: 'color' },
  },
} as ComponentMeta<typeof VariableLine>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VariableLine> = (args) => (
  <div style={{ width: '30rem', height: '30rem', position: 'relative' }}>
    <VariableLine {...args} />
  </div>
);

export const FromStringShort = Template.bind({});
FromStringShort.args = {
  pathString: 'BBaa',
  stroke: '#000000',
};

export const FromStringLong = Template.bind({});
FromStringLong.args = {
  pathString: 'BFIBSFabcabcabc',
  stroke: '#000000',
};
