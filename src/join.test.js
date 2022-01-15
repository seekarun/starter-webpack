import { join } from "./join";

describe("sample test", () => {
  it("should join strings", () => {
    const output = join("hello", "world");
    expect(output).toEqual("hello world");
  });
});
