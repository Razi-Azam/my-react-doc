import React from 'react'
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

//create a context
export const UserContext = React.createContext();

function App() {

  return (
    <>
      {/* useContext Hook part-2. */}

      {/* useContext Hook part-1 */}
      <UserContext.Provider value={"Razi"}>
        <UseContext />
      </UserContext.Provider>

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
