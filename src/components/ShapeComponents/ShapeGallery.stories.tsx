import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShapeComponent, ShapeKind } from "../../lib/shapelib";
import { ShapeGallery } from "./ShapeGallery";

export default {
    title: "Shape Gallery",
    component: ShapeGallery
} as ComponentMeta<typeof ShapeGallery>;
const Template: ComponentStory<typeof ShapeGallery> = (args) => (
    <ShapeGallery {...args} />
)

export const Default = Template.bind({});
Default.args = {
    title: "This is My Gallery Title",
    shapes: [
        {
            name: 'name1',
            shape: <ShapeComponent kind={ShapeKind.CLOSED} fill="#955" complexity={3}/>
        },
        {
            name: 'name2',
            shape: <ShapeComponent kind={ShapeKind.CLOSED} fill="#955" complexity={4}/>
        },
        {
            name: 'name3',
            shape: <ShapeComponent kind={ShapeKind.CLOSED} fill="#955" complexity={5}/>
        },
        {
            name: 'name4',
            shape: <ShapeComponent kind={ShapeKind.CLOSED} fill="#955" complexity={6}/>
        },
    ]
}
