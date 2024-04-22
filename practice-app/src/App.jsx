import React, { useReducer } from 'react'
import './App.css'
import WithPrevState from './components/01useState-hook/01WithPrevState'
import WithObject from './components/01useState-hook/02WithObject'
import WithArray from './components/01useState-hook/03WithArray'
import UseEffectAfterRender from './components/02useEffect-hook/01useEffectAfterRender';
import WithCondition from './components/02useEffect-hook/02withCondition';
import EffectOnlyOnce from './components/02useEffect-hook/03EffectOnlyOnce';
import MouseContainer from './components/02useEffect-hook/04MouseContainer';
import IntervalCounter from './components/02useEffect-hook/05IntervalCounter';
import FecthData from './components/02useEffect-hook/06FecthData';
import UseContext from './components/03useContext-hook/01UseContext';
import UseContextOptimized from './components/03useContext-hook/02UseContextOptimized'
// import CounterOne from './components/04useReducer-hook/01CounterOne' 
// import CounterTwo from './components/04useReducer-hook/02CounterTwo'
import MultipleReducers from './components/04useReducer-hook/03MultipleReducers'
import CompA from './components/04useReducer-hook/Child-Components/CompA'
import CompB from './components/04useReducer-hook/Child-Components/CompB'
import CompC from './components/04useReducer-hook/Child-Components/CompC'
import FetchData from './components/01useState-hook/04FetchData'
import DataFetchTwo from './components/04useReducer-hook/04DataFetchTwo'
import ParentComponent from './components/05useCallback-hook/ParentComponent'
import Counter from './components/06useMemo-hook/Counter'
import FocusINput from './components/07useRef-hook/01FocusINput'
import ClassTimer from './components/07useRef-hook/02ClassTimer'
import HookTimer from './components/07useRef-hook/03HookTimer'
import DocTitleOne from './components/08custom-hook/DocTitleOne'
import DocTitleTwo from './components/08custom-hook/DocTitleTwo'
import CounterOne from './components/08custom-hook/CounterOne';
import CounterTwo from './components/08custom-hook/CounterTwo';
import UserForm from './components/08custom-hook/UserForm'
import CakeContainer from './components/09react-redux-example/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/10useSelector-hook/HookCakeContainer'
import DispatchCakeContainer from './components/11useDispatch-hook/DispatchCakeContainer'
import IceCreamContainer from './components/09react-redux-example/IceCreamContainer'
import NewCakeContainer from './components/09react-redux-example/NewCakeContainer'
import ItemContainer from './components/09react-redux-example/ItemContainer'


//create a context
export const UserContext = React.createContext();
//create another context
export const ChannelContext = React.createContext();

//create a reducer function
const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            state
    }
}

//create a context
export const CountContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>

      {/*  React Redux Examples */}
      <Provider store={store}>

        {/*  Itemcontainer for both cake and icecream
            pass cake or icecream to show it */}
        <ItemContainer cake />
        <ItemContainer />

        {/*  New Cake Container with Input field */}
        <NewCakeContainer />
        
        {/*  React-Redux IceCream Shop App 
        <IceCreamContainer /> */}

        {/*  useSelector hook by react-redux 
        <DispatchCakeContainer /> */}

        {/*  useSelector hook by react-redux 
        <HookCakeContainer /> */}

        {/*  React-Redux Cake Shop App 
        <CakeContainer /> */}
        
      </Provider>

      {/*  Custom Hook  example 3 
      <UserForm /> */}

      {/*  Custom Hook  example 2 
      <CounterOne />
      <CounterTwo /> */}

      {/*  Custom Hook  example 1 
      <DocTitleOne /> 
      <DocTitleTwo /> */}

      {/*  useRef Hook  example 2 
      <ClassTimer />
      <HookTimer />  */}

      {/*  useRef Hook  example 1
      <FocusINput /> */}

      {/*  useMemo Hook  
      <Counter /> */}

      {/*  useCallback Hook  
      <ParentComponent /> */}

      {/*  Data Fetching with useReducer 
      <DataFetchTwo />  */}

      {/*  Data Fetching with useState 
      <FetchData />  */}

      {/*  useReducer with useContext hook 
      <h1>App Counter: {count}</h1>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider>  */}

      {/*  Multiple reducers  
      <MultipleReducers /> */}

      {/* useReducer Hook using complex state and action 
      <CounterTwo />  */}

      {/* useReducer Hook using simple state and action  
      <CounterOne /> */}

      {/* useContext Hook part-2. 
      <UserContext.Provider value={"Razi Azam"}>
        <ChannelContext.Provider value={"Mehfil E Razi"}>
          <UseContextOptimized />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useContext Hook part-1 
      <UserContext.Provider value={"Razi"}>
        <UseContext />
      </UserContext.Provider> */}

      {/* useEffect Hook to fetch Data. 
      <FecthData /> */}

      {/* useEffect Hook incorrect dependency. 
      <IntervalCounter /> */}

      {/* useEffect Hook with cleanup function 
      <MouseContainer /> */}

      {/* useEffect Hook run once. 
      <EffectOnlyOnce /> */}

      {/* useEffect Hook with condition.
      <WithCondition /> */}

      {/* useEffect Hook afer render.
      <UseEffectAfterRender /> */}

      {/* 02 useState with Arrays
      <WithArray /> */}

      {/* 02 useState with Objects
      <WithObject /> */}

      {/* 01 useState with previous state
         <WithPrevState /> */}
    </>
  )
}

export default App
