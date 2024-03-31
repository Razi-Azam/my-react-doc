import './App.css'
import WithPrevState from './components/01useState-hook/01WithPrevState'
import WithObject from './components/01useState-hook/02WithObject'
import WithArray from './components/01useState-hook/03WithArray'
import UseEffectAfterRender from './components/02useEffect-hook/01useEffectAfterRender';


function App() {

  return (
    <>
      {/* useEffect Hook afer render*/}
      <UseEffectAfterRender />
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
