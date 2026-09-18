import { useState, useEffect } from "react";

const POKEAPI = "https://pokeapi.co/api/v2/pokemon?limit=12";

export default function Bestiary() {
    const [creatures, setCreatures] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState("");
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function consultOracle() {
            setStatus("loading");
            setError("");

            try {
                const response = await fetch(POKEAPI, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error(`Failed: ${response.status}`);
                }

                const data = await response.json();

                setCreatures(data.results);
                setStatus("success");

            } catch (err) {
                if (err.name === "AbortError") {
                    return;
                }

                setError(err.message);
                setStatus("error");
            }
        }

        consultOracle();

        return () => {
            controller.abort();
        };

    }, [attempt]);


    // LOADING
    if (status === "loading") {
        return <p>Consulting the oracle...</p>;
    }


    // ERROR
    if (status === "error") {
        return (
            <div role="alert">
                <p>{error}</p>

                <button onClick={() => setAttempt(n => n + 1)}>
                    Try Again
                </button>
            </div>
        );
    }


    // SUCCESS
    return (
        <section>
            <h1>The Bestiary of Kaotika</h1>

            <ul aria-label="Creatures">
                {creatures.map(creature => (
                    <li key={creature.name}>
                        {creature.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}