// Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "../../../../atoms";

// Mock function for the onClick prop
const mockOnClick = jest.fn();

describe("Test for <PrimaryButton/> component", () => {
  test("renders button with correct title", () => {
    const title = "Click me";
    const { getByText } = render(
      <PrimaryButton title={title} onClickFunc={mockOnClick} />
    );
    const buttonElement = getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClickFunc function when button is clicked", () => {
    const title = "Click me";
    const { getByText } = render(
      <PrimaryButton title={title} onClickFunc={mockOnClick} />
    );
    const buttonElement = getByText(title);

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
