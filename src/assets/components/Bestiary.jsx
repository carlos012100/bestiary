import { useState, useEffect } from "react";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=12"


export default function Bestiary() {

    const [creatures, setCreatures] = useState([])
    const [error, setError] = useState("")
    const [status, setStatus] = useState("Loading")

    // Goal: Add a boolean state such as isLoading.

    console.log(creatures)

    useEffect(() => {
        async function loadCreatures() {
            setStatus("Loading")
            setError("")
            try {
                const response = await fetch(POKE_API)
                if(!response.ok) throw new Error(`Failed: ${response.status}`)
            const data = await response.json()
                setCreatures(data.results)
                setStatus("Success")
            } catch (err) {
                setError()
            }

        }
        loadCreatures()
    }, [])

    return (
        <div>
            <h1>The Bestiary</h1>
            <ul>
                {creatures.map(e => <li key={e.name}>{e.name}</li>)}
            </ul>
            {/* {button ? (<button onClick={handlerClick}>ADD NEW CREATURE</button>) :(<button onClick={handlerClick2}>REMOVE CREATURE</button>)} */}
            <div>
                <h2>COUNTER: {creatures.length}</h2>
            </div>
        </div>
    );
}

// Exercise 9 — Error State

// Goal: Add an error state and display an accessible error if the request fails.
// Your UI should have three possible situations: loading, error, and success.
// •loading → “Consulting the oracle...”
// •error → error message + Try Again
// •success → Bestiary
// •Use role="alert" on the error container.