import Icon, { IconProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Icon,
  title: "Core/Components/Icon",
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "info",
};
