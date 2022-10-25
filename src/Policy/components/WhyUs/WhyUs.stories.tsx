import WhyUs from ".";
import { Story } from "@storybook/react";

export default {
  component: WhyUs,
  title: "Policy/Components/WhyUs",
};

const Template: Story = () => (
  <div style={{ width: 500 }}>
    <WhyUs />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
