import formatAmount from ".";

describe(`Policy Function : ${formatAmount.name}`, () => {
  it("should convert given number value to fixed 2 fraction digit string", () => {
    const value = 10.99;

    const response = formatAmount(value);

    expect(response).toEqual("10.99");
  });
});
