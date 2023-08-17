import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
    test("renders hello there", () => {
        //Arrange
        render(<Greeting />);
        //Act
        //...Nothing
        //Assert
        const textElemet = screen.getByText("Hello there", { exact: false });
        expect(textElemet).toBeInTheDocument();
      });

      test('renders nice to see you', () => {
        //Arrange
        render(<Greeting/>);
        //Act
        //..nothing
        //Assers
        const textElement = screen.getByText("Nice to see you.");
        expect(textElement).toBeInTheDocument();
      });

      test('renders changed text when button is clicked', () => {
         //Arrange
        render(<Greeting/>);
         //Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        //Assert
        const textElement = screen.getByText("Changed!");
        expect(textElement).toBeInTheDocument();
      });

      test('does not render nice to see you text abter button is clicked', () => {
         //Arrange
         render(<Greeting/>);
         //Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        //Assert
        const textElement = screen.queryByText("Nice to see you.");
        expect(textElement).toBeNull();
      });
});
