import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hero } from './Hero';
import { Section } from '../Base/Section';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shape Lib/Hero',
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fill: { control: 'color' },
  },
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => (
  <Section>
    <Hero {...args} />
  </Section>
);

export const HeroExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroExample.args = {
  title: 'This is the title',
  subTitle: 'This is the subTitle',
};
