import SummaryCard from ".";
import { Story } from "@storybook/react";
import PolicyDecorator from "../../../../.storybook/decorators/PolicyDecorator";

export default {
  component: SummaryCard,
  title: "Policy/Components/SummaryCard",
  decorators: [PolicyDecorator],
};

const Template: Story = () => (
  <div style={{ width: 500 }}>
    <SummaryCard />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
