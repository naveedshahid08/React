import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "naveed",
    age: 21
  }

  let newArry = [1, 2, 3, 4]

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel="Chai or Code" someObj={myObj} someArr={newArry} /> */}
      <Card username="naveedshahid" btnText="click me" />
      <Card username="navsmith" />

    </>
  )
}

export default App
