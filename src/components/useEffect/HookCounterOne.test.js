import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";

import HookCounterOne from "./HookCounterOne";
import App from "../../App";

afterEach(cleanup);

it('render the component', () => {
  // const  { getByText } =  render(<HookCounterOne/>)

  // Trick for async, immediately run on the next tick after JS is done 
  // setTimeout(() => {
    // expect(getByText('Click')).toBeInTheDocument()
    // expect(getByText("Click 0 times")).toBeInTheDocument()
    const { getByTestId, queryByTestId } = render(<HookCounterOne />);
    // const button = getByTestId("button")
    expect(queryByTestId("greetings")).toBeTruthy()
  // })
  // let b
  // await wait(() => 
  //   b =getByText(/Click/i)
  // )
})

it("number increases by five when button is clikcked", () => {
  // const { getByText } = render(<HookCounter />);

  // expect(getByText(/Count/i).textContent).toBe("Count: 0");

  // fireEvent.click(getByText(/Put/i));

  // expect(getByText(/Count/i).textContent).toBe("Count: 5");
  // const { getByTestId } = render(<HookCounterOne />);
  // const button = getByTestId("button")

  // setTimeout(() => {
  //   expect(button).toBeInTheDocument()
  //   fireEvent.click(button)
  // })

  // fireEvent.change(inputEl, { target: { value: newValue }})
  // expect(inputEl.value).toBe(newValue)
  // expect(outputEl.textContent).toBe(`Your first name is: ${newValue}`)
});