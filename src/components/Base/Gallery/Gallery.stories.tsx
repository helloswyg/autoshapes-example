import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Gallery } from "./Gallery";

export default {
    title: "Gallery",
    component: Gallery
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
<Gallery {...args}/>
)

export const Default = Template.bind({});
Default.args={
    title: "This is My Gallery Title",
    items: ["123","2", <h3>3</h3>, <h1>4</h1>]
}
