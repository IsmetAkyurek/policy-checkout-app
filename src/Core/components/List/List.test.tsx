import List from ".";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${List.name}`, () => {
  it("should render children list items", () => {
    render(
      <List>
        <List.Item>List Item</List.Item>
      </List>
    );

    const childrenElement = screen.getByText("List Item");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should return null for calling ListItem separately", () => {
    const result = List.Item({ children: 1 });

    expect(result).toBeNull();
  });
});
