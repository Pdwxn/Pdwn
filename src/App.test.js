import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders portfolio brand", () => {
  const { getByText } = render(<App />);
  expect(getByText("Pdwn", { selector: ".navbar-brand" })).toBeInTheDocument();
});
