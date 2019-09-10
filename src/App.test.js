import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdaptor from 'enzyme-adapter-react-16'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdaptor()})

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('it renders without errors', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'app-component')

})



