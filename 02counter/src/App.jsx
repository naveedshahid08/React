import { useState } from 'react'
import './App.css'

function App() {

  let [counter, naveedCounter] = useState(0)

  // let counter = 10;

  const addValues = () => {

    // counter = counter + 1
    if (counter < 20) {
      naveedCounter(counter + 1);

    }
    else {
      naveedCounter(counter);
    }

  }
  const removeValues = () => {
    // counter = counter - 1;
    if (counter > 0) {
      naveedCounter(counter - 1);
    }
    else {
      naveedCounter(counter);
    }

  }
  return (
    <>



      <h1>Hello, React App</h1>
      <h2>Counter Value:{counter}</h2>


      <button onClick={addValues}>Increase Value{counter}</button>
      <br />
      <button onClick={removeValues}>Remove Value{counter}</button>

    </>
  )
}

export default App
