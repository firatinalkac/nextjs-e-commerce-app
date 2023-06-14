// input.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "@/components/Input/Input";

describe("Input component", () => {
   it("renders without crashing", () => {
      const { getByPlaceholderText } = render(
         <Input placeholder="Test input" />
      );
      expect(getByPlaceholderText("Test input")).toBeInTheDocument();
   });

   it("handles input change", () => {
      const handleInput = jest.fn();
      const { getByPlaceholderText } = render(
         <Input placeholder="Test input" handleInput={handleInput} />
      );
      const inputElement = getByPlaceholderText("Test input");
      fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
      expect(handleInput).toHaveBeenCalledTimes(1);
      expect(handleInput).toHaveBeenCalledWith("Hello, World!");
   });

   it("displays left icon", () => {
      const leftIcon = "@/public/assets/icons/search-icon.svg";
      const { getByAltText } = render(
         <Input placeholder="Test input" leftIcon={leftIcon} />
      );
      expect(getByAltText("left-icon")).toBeInTheDocument();
   });

   // You can add more tests for different props and their effects on the component.
});
