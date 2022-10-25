import PackageFeatures from ".";
import { Story } from "@storybook/react";
import PolicyDecorator from "../../../../.storybook/decorators/PolicyDecorator";

export default {
  component: PackageFeatures,
  title: "Policy/Components/PackageFeatures",
  decorators: [PolicyDecorator],
};

const Template: Story = () => <PackageFeatures />;

export const Default = Template.bind({});
Default.args = {};
