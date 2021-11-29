import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

export default {
  title: 'Code Block',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => (
  <div style={{ width: '40rem' }}>
    <CodeBlock {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  code: "console.log('hello world')",
};

export const WithDocs = Template.bind({});
WithDocs.args = {
  code: "console.log('hello world')",
  docsURL: '#',
};
