import './App.css'
import WithPrevState from './components/01useState-hook/01WithPrevState'
import WithObject from './components/01useState-hook/02WithObject'
import WithArray from './components/01useState-hook/03WithArray'
import UseEffectAfterRender from './components/02useEffect-hook/01useEffectAfterRender';
import WithCondition from './components/02useEffect-hook/02withCondition';
import EffectOnlyOnce from './components/02useEffect-hook/03EffectOnlyOnce';
import MouseContainer from './components/02useEffect-hook/04MouseContainer';
import IntervalCounter from './components/02useEffect-hook/05IntervalCounter';



function App() {

  return (
    <>
      {/* useEffect Hook incorrect dependency. */}
      <IntervalCounter />

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
