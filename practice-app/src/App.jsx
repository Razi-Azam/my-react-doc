import './App.css'
import WithPrevState from './components/01useState-hook/01WithPrevState'
import WithObject from './components/01useState-hook/02WithObject'
import WithArray from './components/01useState-hook/03WithArray'


function App() {

  return (
    <>
      <WithArray />

      {/* 02 useState with Objects
      <WithObject /> */}

      {/* 01 useState with previous state
         <WithPrevState /> */}
    </>
  )
}

export default App
