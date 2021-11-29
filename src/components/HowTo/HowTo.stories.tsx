import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HowTo } from './HowTo';

export default {
  title: 'How To',
  component: HowTo,
} as ComponentMeta<typeof HowTo>;

const Template: ComponentStory<typeof HowTo> = (args) => <HowTo />;

export const Default = Template.bind({});
