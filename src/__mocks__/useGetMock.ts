import { UseGetResponse } from "Core/hooks/useGet";

const useGetMock =
  <T>(props: Partial<UseGetResponse<T>>) =>
  (): UseGetResponse<T> => ({
    error: "",
    loading: false,
    request: jest.fn(),
    data: undefined,
    ...props,
  });

export default useGetMock;
