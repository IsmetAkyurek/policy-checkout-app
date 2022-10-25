import Card, { CardProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Card,
  title: "Core/Components/Card",
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card",
};
