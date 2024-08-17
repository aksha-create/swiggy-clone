import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("rendering restaurant card successfully", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Grameen Kulfi");
  expect(name).toBeInTheDocument();
});
