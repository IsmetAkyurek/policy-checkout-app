import React from "react";
import "../../src/Core/styles/main.scss";
import { Story } from "@storybook/react";

const CommonDecorator = (Story: Story) => {
  return (
    <>
      <Story />
    </>
  );
};

export default CommonDecorator;
