import PolicyContextProvider from ".";
import PolicyContext from "Policy/context/context";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { PolicyPackage, PolicyPaymentSchedule } from "Policy/types";

describe(`Policy Component : ${PolicyContextProvider.name}`, () => {
  it("should pass policyPackage value and setter function", async () => {
    const policyPackage = { name: "Test" } as PolicyPackage;
    render(
      <PolicyContextProvider>
        <PolicyContext.Consumer>
          {(props) => (
            <>
              <button onClick={() => props.setPolicyPackage(policyPackage)}>Button</button>
              {props.policyPackage?.name}
            </>
          )}
        </PolicyContext.Consumer>
      </PolicyContextProvider>
    );

    const buttonElement = screen.getByText("Button");

    userEvent.click(buttonElement);
    await waitFor(() => expect(screen.queryByText("Test")).toBeInTheDocument());
  });

  it("should pass coverageAmount value and setter function", async () => {
    render(
      <PolicyContextProvider>
        <PolicyContext.Consumer>
          {(props) => (
            <>
              <button onClick={() => props.setCoverageAmount(1)}>Button</button>
              {props.coverageAmount}
            </>
          )}
        </PolicyContext.Consumer>
      </PolicyContextProvider>
    );

    const buttonElement = screen.getByText("Button");

    userEvent.click(buttonElement);
    await waitFor(() => expect(screen.queryByText("1")).toBeInTheDocument());
  });

  it("should pass paymentSchedule value and setter function", async () => {
    const paymentSchedule = { name: "Test" } as PolicyPaymentSchedule;

    render(
      <PolicyContextProvider>
        <PolicyContext.Consumer>
          {(props) => (
            <>
              <button onClick={() => props.setPaymentSchedule(paymentSchedule)}>Button</button>
              {props.paymentSchedule?.name}
            </>
          )}
        </PolicyContext.Consumer>
      </PolicyContextProvider>
    );

    const buttonElement = screen.getByText("Button");

    userEvent.click(buttonElement);
    await waitFor(() => expect(screen.queryByText(paymentSchedule.name)).toBeInTheDocument());
  });
});
