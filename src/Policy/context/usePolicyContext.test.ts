import usePolicyContext from ".";
import { renderHook } from "@testing-library/react";

const contextMock = {
  policyPackage: "package",
  onSelectPolicyPackage: () => {},
};

jest.mock("react", () => {
  const ReactActual = jest.requireActual("react");
  return {
    ...ReactActual,
    useContext: () => contextMock,
  };
});

describe(`Policy Hook : ${usePolicyContext.name}`, () => {
  it("should return the context value", () => {
    const { result } = renderHook(() => usePolicyContext());

    expect(result.current).toEqual(contextMock);
  });
});
