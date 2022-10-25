import List, { ListProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: List,
  title: "Core/Components/List",
};

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<List.Item key={1}>List Item 1</List.Item>, <List.Item key={2}>List Item 2</List.Item>],
};
