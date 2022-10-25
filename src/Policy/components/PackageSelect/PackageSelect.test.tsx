import PackageSelect from ".";
import * as useGet from "Core/hooks/useGet";
import useGetMock from "__mocks__/useGetMock";
import * as usePolicyContext from "Policy/context";
import { render, waitFor } from "@testing-library/react";
import usePolicyContextMock from "__mocks__/usePolicyContextMock";

describe(`Policy Component : ${PackageSelect.name}`, () => {
  it("should call context setPolicyPackage when data is loaded and not empty", async () => {
    const setPolicyPackage = jest.fn();
    const data = [{ id: 1, name: "Test", description: "Test" }];

    jest.spyOn(useGet, "default").mockImplementation(useGetMock({ data }));
    jest.spyOn(usePolicyContext, "default").mockImplementation(usePolicyContextMock({ setPolicyPackage }));

    render(<PackageSelect />);

    await waitFor(() => expect(setPolicyPackage).toBeCalledWith(data[0]));
  });

  it("should not call context setPolicyPackage when data is empty", async () => {
    const setPolicyPackage = jest.fn();

    jest.spyOn(useGet, "default").mockImplementation(useGetMock({}));
    jest.spyOn(usePolicyContext, "default").mockImplementation(usePolicyContextMock({ setPolicyPackage }));

    render(<PackageSelect />);

    await waitFor(() => expect(setPolicyPackage).not.toBeCalled());
  });
});
