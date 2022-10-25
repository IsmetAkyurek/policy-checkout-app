import { Story } from "@storybook/react";
import CardSelect, { CardSelectProps } from ".";

export default {
  component: CardSelect,
  title: "Core/Components/CardSelect",
};

const Template: Story<CardSelectProps<unknown>> = (args) => <CardSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 2,
  children: [
    <CardSelect.Option key={1} title="Option 1" subtitle="Option 1 Subtitle" value={1} />,
    <CardSelect.Option key={2} title="Option 2" subtitle="Option 2 Subtitle" value={2} />,
  ],
};
