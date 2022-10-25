import context from ".";

describe(`Policy Function: ${context.displayName}`, () => {
  it("should create the context", () => {
    expect(context).not.toBeFalsy();
  });
});
