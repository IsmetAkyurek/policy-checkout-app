import CoverageAmount from ".";
import { Story } from "@storybook/react";
import PolicyDecorator from "../../../../.storybook/decorators/PolicyDecorator";

export default {
  component: CoverageAmount,
  title: "Policy/Components/CoverageAmount",
  decorators: [PolicyDecorator],
};

const Template: Story = () => <CoverageAmount />;

export const Default = Template.bind({});
Default.args = {};
