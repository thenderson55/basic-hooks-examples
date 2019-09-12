import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SimpleCounter from "./SimpleCounter";

afterEach(() => {
  window.localStorage.removeItem("count");

})

test("counter increments the count", () => {
  const { container } = render(<SimpleCounter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("0");
  fireEvent.click(button);
  expect(button.textContent).toBe("1");
});

test("read and writes to local storage", () => {
  window.localStorage.setItem("count", "3");
  const { getByText } = render(<SimpleCounter />);
  const button = getByText("3");
  expect(button.textContent).toBe("3");
  fireEvent.click(button);
  expect(window.localStorage.getItem("count")).toBe("4");
  expect(button.textContent).toBe("4");
  // window.localStorage.removeItem("count");
});
