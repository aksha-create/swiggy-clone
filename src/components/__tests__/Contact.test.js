import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
//"it" is an alias for "test"
describe("contact us test cases", () => {
  test("heading loads in contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("button exists in contact us page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("It should load name placeholder in contact us page", () => {
    render(<Contact />);
    const InputName = screen.getByPlaceholderText("name");
    expect(InputName).toBeInTheDocument();
  });
  //   it("should load 2 input boxes in contact us page", () => {
  //     render(<Contact />);
  //     const inputBoxes = screen.getAllByRole("textbox");
  //     expect(inputBoxes).toBeInTheDocument();
  //   });
});
