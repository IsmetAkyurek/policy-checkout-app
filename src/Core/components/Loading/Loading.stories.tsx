import Loading, { LoadingProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Loading,
  title: "Core/Components/Loading",
};

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div style={{ padding: 20, backgroundColor: "lightblue" }}>Loading</div>,
};
