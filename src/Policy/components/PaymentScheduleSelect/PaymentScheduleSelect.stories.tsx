import PaymentScheduleSelect from ".";
import { Story } from "@storybook/react";
import PolicyDecorator from "../../../../.storybook/decorators/PolicyDecorator";

export default {
  component: PaymentScheduleSelect,
  title: "Policy/Components/PaymentScheduleSelect",
  decorators: [PolicyDecorator],
};

const Template: Story = () => <PaymentScheduleSelect />;

export const Default = Template.bind({});
Default.args = {};
