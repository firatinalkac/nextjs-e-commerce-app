import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button/Button";

describe("Button component", () => {
   it("renders the button with the correct text", () => {
      const { getByText } = render(<Button text="Button Text" />);
      expect(getByText("Button Text")).toBeInTheDocument();
   });

   it("applies the correct styles based on the type prop", () => {
      const { getByText } = render(
         <Button text="Button Text" type="success" />
      );
      expect(getByText("Button Text")).toHaveClass("success");
   });

   it("calls the onClick function when clicked", () => {
      const handleClick = jest.fn();
      const { getByText } = render(
         <Button text="Button Text" onClick={handleClick} />
      );
      fireEvent.click(getByText("Button Text"));
      expect(handleClick).toHaveBeenCalledTimes(1);
   });

   it("applies the correct width and padding styles", () => {
      const { getByText } = render(
         <Button text="Button Text" width="200px" padding="16px 24px" />
      );
      expect(getByText("Button Text")).toHaveStyle({
         width: "200px",
         padding: "16px 24px",
      });
   });
});
