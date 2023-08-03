import { ComponentStory, ComponentMeta } from "@storybook/react";
import { avatar } from "./avatar";

export default {
    title: "shared/avatar",
    component: avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof avatar>;

const Template: ComponentStory<typeof avatar> = (args) => <avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
