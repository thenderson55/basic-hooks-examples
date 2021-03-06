import React, { useReducer } from 'react';
import './App.css';
import HookCounter from './components/useContext/HookCounter'

import HookCounterOne from './components/useEffect/HookCounterOne'
import MouseContainer from './components/useEffect/MouseContainer'
import IntervalClasCounter from './components/useEffect/IntervalClassCounter'
import DataFetching from './components/useEffect/DataFetching'
import DataFetchingTwo from './components/useEffect/DataFetchingTwo'

import UseReducer from './components/useReducer/UseReducer'
import UseReducerTwo from './components/useReducer/UseReducerTwo'
import UseReducerThree from './components/useReducer/UseReducerThree'

import ParentComponent from './components/useCallback/ParentComponent'

// import Counter from './components/useMemo/Counter'

import InputFocus from './components/useRef/FocusInput'
import HookTimer from './components/useRef/HookTimer'
import Vanilla from './components/useRef/Vanilla'

import DocTitleOne from './components/customHooks/DocTitleOne'
import CustomCounter from './components/customHooks/CustomCounter'
import UserForm from './components/customHooks/UserForm'

// import Counter from './components/useState/Counter'
import SimpleCounter from './components/useState/SimpleCounter'


export const UserContext = React.createContext()
export const CountContext = React.createContext()

const intitialState = "Hello from App"

const reducer = (state, action) => {
  switch(action) {
    case 'inc':
      return state += "X"
    case 'dec':
      return state - 1
    case 'reset':
      return intitialState
    default:
      return state
  }
}


function App() {
  
  const [count, dispatch] = useReducer(reducer, intitialState)
  const user = { user: "Tommy", age: 39}

  return (
    <UserContext.Provider value={user}>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
        <div className="App" data-test="app-component">
          <h1>{count}</h1>
          {/* <HookCounter name="bobby"></HookCounter>
          <HookCounterOne></HookCounterOne>
          <UseReducerThree/> */}
          {/* <MouseContainer></MouseContainer> */}
          {/* <IntervalClasCounter/> */}
          {/* <DataFetchingTwo/> */}
          {/* <ParentComponent/> */}
          <SimpleCounter/>
          <Vanilla/>
          {/* <InputFocus/> */}
          {/* <HookTimer/>
          <DocTitleOne/>
          <CustomCounter/>
          <UserForm/> */}
        </div>
      </CountContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
