import StepPriceInput from ".";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

describe(`Core Component : ${StepPriceInput.name}`, () => {
  it("should call onChange with increased step when increase button is clicked", async () => {
    const onChange = jest.fn();

    render(<StepPriceInput value={1} onChange={onChange} step={10} />);

    const increaseButtonElement = screen.getByTestId("increase-button");

    userEvent.click(increaseButtonElement);

    await waitFor(() => expect(onChange).toBeCalledWith(11));
  });

  it("should call onChange with decreased step when decrease button is clicked", async () => {
    const onChange = jest.fn();

    render(<StepPriceInput value={11} onChange={onChange} step={10} />);

    const decreaseButtonElement = screen.getByTestId("decrease-button");

    userEvent.click(decreaseButtonElement);

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });

  it("should call onChange with min value when min is higher then the current value", async () => {
    const onChange = jest.fn();

    render(<StepPriceInput min={10} value={1} onChange={onChange} />);

    await waitFor(() => expect(onChange).toBeCalledWith(10));
  });

  it("should call onChange with min value when min is higher then the current value", async () => {
    const onChange = jest.fn();

    render(<StepPriceInput step={10} onChange={onChange} />);

    const increaseButtonElement = screen.getByTestId("increase-button");

    userEvent.click(increaseButtonElement);

    await waitFor(() => expect(onChange).toBeCalledWith(10));
  });

  it("should call onChange with max value when max is lower then the current value", async () => {
    const onChange = jest.fn();

    render(<StepPriceInput max={1} value={10} onChange={onChange} />);

    await waitFor(() => expect(onChange).toBeCalledWith(1));
  });
});
