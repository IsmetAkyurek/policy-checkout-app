import NavigationButtons from ".";
import { Story } from "@storybook/react";

export default {
  component: NavigationButtons,
  title: "Policy/Components/NavigationButtons",
};

const Template: Story = () => <NavigationButtons />;

export const Default = Template.bind({});
Default.args = {};
