import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button/Button";

describe("Button component", () => {
   it("renders the button with the correct text", () => {
      const { getByText } = render(<Button text="Test Button" />);
      expect(getByText("Test Button")).toBeInTheDocument();
   });

   it("applies the correct styles based on the type prop", () => {
      const { getByText } = render(
         <Button text="Test Button" type="secondary" />
      );
      expect(getByText("Test Button")).toHaveClass("secondary");
   });

   it("calls the onClick function when clicked", () => {
      const handleClick = jest.fn();
      const { getByText } = render(
         <Button text="Test Button" onClick={handleClick} />
      );
      fireEvent.click(getByText("Test Button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
   });

   it("applies the correct width and padding styles", () => {
      const { getByText } = render(
         <Button text="Test Button" width="200px" padding="16px 24px" />
      );
      expect(getByText("Test Button")).toHaveStyle({
         width: "200px",
         padding: "16px 24px",
      });
   });
});
