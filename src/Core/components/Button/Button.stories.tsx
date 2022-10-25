import Button, { ButtonProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Button,
  title: "Core/Components/Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
