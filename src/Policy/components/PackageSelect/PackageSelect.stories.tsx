import PackageSelect from ".";
import { Story } from "@storybook/react";
import PolicyDecorator from "../../../../.storybook/decorators/PolicyDecorator";

export default {
  component: PackageSelect,
  title: "Policy/Components/PackageSelect",
  decorators: [PolicyDecorator],
};

const Template: Story = () => <PackageSelect />;

export const Default = Template.bind({});
Default.args = {};
