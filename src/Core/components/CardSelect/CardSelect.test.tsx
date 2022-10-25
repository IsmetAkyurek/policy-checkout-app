import CardSelect from ".";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

describe(`Core Component : ${CardSelect.name}`, () => {
  it("should render children select options", () => {
    render(
      <CardSelect value={1} onChange={jest.fn()}>
        <CardSelect.Option title="Radio Option" value={1} />
      </CardSelect>
    );

    const childrenElement = screen.getByText("Radio Option");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should render option subtitle when provided", () => {
    render(
      <CardSelect value={1} onChange={jest.fn()}>
        <CardSelect.Option title="Radio Option" subtitle="Radio Option Subtitle" value={1} />
      </CardSelect>
    );

    const subtitleElement = screen.getByText("Radio Option Subtitle");

    expect(subtitleElement).toBeInTheDocument();
  });

  it("should call onChange with clicked option value", async () => {
    const onChange = jest.fn();

    render(
      <CardSelect value={1} onChange={onChange}>
        <CardSelect.Option title="Radio Option" value={1} />
      </CardSelect>
    );

    const optionElement = screen.getByRole("option");

    userEvent.click(optionElement);

    await waitFor(() => expect(onChange).toBeCalledWith(1));
    await waitFor(() => expect(screen.getByRole("option", { selected: true })).toBeInTheDocument());
  });

  it("should call onChange with the first children when defaultActiveFirstOption is true and multiple children are provided", async () => {
    const onChange = jest.fn();

    render(
      <CardSelect onChange={onChange} defaultActiveFirstOption>
        <CardSelect.Option title="Radio Option" value={1} />
        <CardSelect.Option title="Radio Option" value={2} />
      </CardSelect>
    );

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });

  it("should call onChange with the child when defaultActiveFirstOption is true and a single child is provided", async () => {
    const onChange = jest.fn();

    render(
      <CardSelect onChange={onChange} defaultActiveFirstOption>
        <CardSelect.Option title="Radio Option" value={1} />
      </CardSelect>
    );

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });

  it("should call not onChange when defaultActiveFirstOption is true and children are not provided", async () => {
    const onChange = jest.fn();

    render(<CardSelect onChange={onChange} defaultActiveFirstOption />);

    await waitFor(() => expect(onChange).not.toBeCalled());
  });

  it("should return null for calling CardOption separately", () => {
    const result = CardSelect.Option({ title: "", value: "" });

    expect(result).toBeNull();
  });
});
