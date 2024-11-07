import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    /*if (counter >= 20) {
      setCounter(counter)
    }
    else {
      setCounter(counter + 1)
    } */
    setCounter(oldCounter => oldCounter + 1)
    setCounter(oldCounter => oldCounter + 1)
    setCounter(oldCounter => oldCounter + 1)
    setCounter(oldCounter => oldCounter + 1)
    console.log(counter)

  }

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter)
    }
    else { setCounter(counter - 1) }
    console.log(counter)

  }


  return (
    <>
      <h1>Hello, Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
