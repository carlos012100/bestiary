import { useEffect, useState } from 'react'
import Bestiary from './assets/components/Bestiary'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loading() {
      await new Promise(resolve => setTimeout(resolve, 1000))

      setIsLoading(false)


    }
    loading()
  }, [])

  useEffect(() => {
    console.log(`Counter is ${count}`)
  }, [count])

  // const handleConsulClick = () => {
  //   setIsLoading(false)

  // }
  const handleCounter = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        {isLoading ? (<><h1>Consulting the oracle...</h1>
          {/* <button onClick={handleConsulClick}>CONSULT</button> */}
          <button onClick={handleCounter}>COUNTER:  {count}</button></>) : (<Bestiary />)}
      </div>
    </>
  )
}

export default App

// Goal: Fetch the first 12 Pokémon and render them with map().
// Use the endpoint: const POKEAPI = "https://pokeapi.co/api/v2/pokemon?limit=12"
// •Start with an empty creatures array.
// •Fetch inside an effect.
// •Convert the response to JSON.
// •Find data.results.
// •Put results into state.
// •Let map() render the creatures.