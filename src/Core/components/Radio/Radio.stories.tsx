import Radio, { RadioProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Radio,
  title: "Core/Components/Radio",
};

const Template: Story<RadioProps<unknown>> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 2,
  children: [
    <Radio.Option key={1} title="Option 1" subtitle="Option 1 Subtitle" value={1} />,
    <Radio.Option key={2} title="Option 2" subtitle="Option 2 Subtitle" value={2} />,
  ],
};
