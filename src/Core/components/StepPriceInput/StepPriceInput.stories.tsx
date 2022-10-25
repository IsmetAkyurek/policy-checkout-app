import StepPriceInput, { StepPriceInputProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: StepPriceInput,
  title: "Core/Components/StepPriceInput",
};

const Template: Story<StepPriceInputProps> = (args) => <StepPriceInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 3000,
};
