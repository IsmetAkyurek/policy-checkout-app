import Radio from ".";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

describe(`Core Component : ${Radio.name}`, () => {
  it("should render children radio options", () => {
    render(
      <Radio value={1} onChange={jest.fn()}>
        <Radio.Option title="Radio Option" value={1} />
      </Radio>
    );

    const childrenElement = screen.getByText("Radio Option");

    expect(childrenElement).toBeInTheDocument();
  });

  it("should render option subtitle when provided", () => {
    render(
      <Radio value={1} onChange={jest.fn()}>
        <Radio.Option title="Radio Option" subtitle="Radio Option Subtitle" value={1} />
      </Radio>
    );

    const subtitleElement = screen.getByText("Radio Option Subtitle");

    expect(subtitleElement).toBeInTheDocument();
  });

  it("should call onChange with clicked option value", async () => {
    const onChange = jest.fn();

    render(
      <Radio value={1} onChange={onChange}>
        <Radio.Option title="Radio Option" value={1} />
      </Radio>
    );

    const optionElement = screen.getByRole("radio");

    userEvent.click(optionElement);

    await waitFor(() => expect(onChange).toBeCalledWith(1));
    await waitFor(() => expect(screen.getByRole("radio", { checked: true })).toBeInTheDocument());
  });

  it("should not onChange when defaultActiveFirstOption is true and children are not provided", async () => {
    const onChange = jest.fn();

    render(<Radio onChange={onChange} defaultActiveFirstOption />);

    await waitFor(() => expect(onChange).not.toBeCalled());
  });

  it("should call onChange with the first children when defaultActiveFirstOption is true and multiple children are provided", async () => {
    const onChange = jest.fn();

    render(
      <Radio onChange={onChange} defaultActiveFirstOption>
        <Radio.Option title="Radio Option" value={1} />
        <Radio.Option title="Radio Option" value={2} />
      </Radio>
    );

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });

  it("should call onChange with the child when defaultActiveFirstOption is true and a single child is provided", async () => {
    const onChange = jest.fn();

    render(
      <Radio value={2} onChange={onChange} defaultActiveFirstOption>
        <Radio.Option title="Radio Option" value={1} />
      </Radio>
    );

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });

  it("should return null for calling RadioOption separately", () => {
    const result = Radio.Option({ title: "", value: "" });

    expect(result).toBeNull();
  });
});
