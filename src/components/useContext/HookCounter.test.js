import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

import HookCounter from "./HookCounter";
import App from "../../App";

afterEach(cleanup);

it("number in state increases by one when button is clicked", () => {
  const { getByText } = render(<HookCounter />);

  expect(getByText(/Count/i).textContent).toBe("Count: 0");

  fireEvent.click(getByText("Increase"));

  expect(getByText(/Count/i).textContent).toBe("Count: 1");
});

it("number increases by five when button is clikcked", () => {
  const { getByText } = render(<HookCounter />);

  expect(getByText(/Count/i).textContent).toBe("Count: 0");

  fireEvent.click(getByText(/Put/i));

  expect(getByText(/Count/i).textContent).toBe("Count: 5");
});

it("check props are being passed down", () => {
  const { getByTestId } = render(
    <App>
      <HookCounter />
    </App>
  );
  // data-testid="todos-ul"
  const greeting = getByTestId("greeting");

  expect(greeting.textContent).toBe("Yolo bobby!");
});

it("allows input", () => {
  const { getByTestId } = render(<HookCounter />);

  const inputEl = getByTestId("firstName-input")
  const newValue = "Freddy"

  fireEvent.change(inputEl, { target: { value: newValue }})
  expect(inputEl.value).toBe(newValue)

});

it("updates the state when input happens", () => {
  const { getByTestId } = render(<HookCounter />);

  const inputEl = getByTestId("firstName-input")
  const outputEl = getByTestId("firstName-output")
  const newValue = "Freddy"

  fireEvent.change(inputEl, { target: { value: newValue }})
  expect(inputEl.value).toBe(newValue)
  expect(outputEl.textContent).toBe(`Your first name is: ${newValue}`)

});

// import React from 'react';
// import Enzyme, { shallow, mount } from 'enzyme'
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import EnzymeAdaptor from 'enzyme-adapter-react-16'

// import HookCounter from './HookCounter';

// Enzyme.configure({ adapter: new EnzymeAdaptor()})

// const setup = (props={}) => {
//   return shallow(<HookCounter {...props} />)
// }

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`)
// }

// describe('HookComponent', () => {

//   let wrapper, container

//   beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
//     // wrapper = setup()
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   test('renders without an error', () => {
//     //Check we have the correct compenent
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const hookComponent = findByTestAttr(wrapper, 'hook-component')
//     //Throw and error if thelength is not one
//     expect(hookComponent.length).toBe(1)
//   })

//   it("renders with or without a name", () => {
//     // act(() => {
//     //   render(<HookCounter />, container);
//     // });
//     // expect(container.textContent).toBe("Yo bobby!");

//     // act(() => {
//     //   render(<HookCounter name="Jenny" />, container);
//     // });
//     const wrapper = mount(<HookCounter name="Jenny"  />)
//     console.log("ooooooo",wrapper.props());

//     // expect(wrapper.props().name).to.equal('Jenny');
//     const greeting = findByTestAttr(wrapper, 'greeting')
//     console.log('gg', greeting)

//     expect(greeting.textContent).toBe("Yo Jenny!");

//     // act(() => {
//     //   render(<HookCounter name="Margaret" />, container);
//     // });
//     // expect(container.textContent).toBe("Yo Margaret!");
//   });

//   test('renders buttons', () => {
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const resetButton = findByTestAttr(wrapper, 'reset-button')
//     console.log('btn', resetButton)
//     const incButton = findByTestAttr(wrapper, 'increment-button')
//     const decButton = findByTestAttr(wrapper, 'decrement-button')
//     expect(resetButton.length).toBe(1)
//     expect(incButton.length).toBe(1)
//     expect(decButton.length).toBe(1)
//   })

//   test('counter starts at 0', () => {
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const counterDisplay = findByTestAttr(wrapper, 'counter-display')
//     expect(counterDisplay.text()).toContain("Count: 0")
//   })

//   // TODO find way with React Hooks
//   // test('counter starts at 0', () => {
//   //   const counterDisplay = findByTestAttr(wrapper, 'counter-display')
//   //   expect(counterDisplay.text()).toEqual("0")
//   //   // Maybe better way
//   //   expect(counterDisplay.text()).toContain(0)
//   //   // expect(initialCounterState.prop('value')).toBe(0)
//   // })

//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, 'useState')
//   useStateSpy.mockImplementation((init) => [init, setState]);

//   it('calls setCount with 0 when clicking button', () => {
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const resetButton = findByTestAttr(wrapper, 'reset-button')
//     resetButton.props().onClick()
//     expect(setState).toHaveBeenCalledWith(0)
//   })

//   it('clicking button calls setCount with count + 1', () => {
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const increaseButton = findByTestAttr(wrapper, 'increment-button')
//     increaseButton.props().onClick();
//     // increaseButton.simulate("click");
//     // expect(wrapper.find("[data-test='counter-display']").text()).toEqual("1")
//     expect(setState).toHaveBeenCalledWith(1);
//   });

//   it('calls setCount with -1 when clicking button', () => {
//     const wrapper = shallow(<HookCounter name="Jenny"  />)

//     const decreaseButton = findByTestAttr(wrapper, 'decrement-button')
//     decreaseButton.props().onClick()
//     expect(setState).toHaveBeenCalledWith(-1)
//   })

//   // it('clicking button calls setCount with count - 1', () => {
//   //   const decreaseButton = findByTestAttr(wrapper, 'decrement-button')
//   //   decreaseButton.props().onClick();
//   //   // increaseButton.simulate("click");
//   //   // expect(wrapper.find("[data-test='counter-display']").text()).toEqual("1")
//   //   expect(setState).toHaveBeenCalledWith(-1);
//   // });

//   test('clicking button increments counter display', () => {
//     // const counter = 7
//     // const wrapper = setup(null, { counter })
//     // const button = findByTestAttr(wrapper, 'increment-button')
//     // button.simulate('click')
//     // wrapper.update()

//     // const counterDisplay = findByTestAttr(wrapper, 'counter-display')
//     // expect(counterDisplay.text()).toContain(counter + 1)
//   })
// })

// // test('renders without error', () => {
// //   const wrapper = setup()
// //   const component = findByTestAttr(wrapper, 'component-congrats')
// //   expect(component.length).toBe(1)
// // })

// // test('renders no text when `successs` prop is false', () => {
// //   const wrapper = setup({ success: false })
// //   const component = findByTestAttr(wrapper, 'component-congrats')
// //   expect(component.text()).toBe('Yay!')
// // })

// // test('renders non-empty congrats message when `success` prop is true', () => {
// //   const wrapper = setup({ success: false })
// //   const message  = findByTestAttr(wrapper, 'congrats-message')
// //   expect(message.text().length).not.toBe(0)

// // })

// // test('does not thow warning with expected props', () => {
// //   const expectedProps = { success: false }
// //   const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name)
// //   expect(propError).toBeUndefined()
// //   // checkProps(Congrats, expectedProps)
// // })
