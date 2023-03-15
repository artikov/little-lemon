import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm.jsx";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
