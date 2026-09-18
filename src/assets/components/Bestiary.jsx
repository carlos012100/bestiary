import { useState } from "react";


const creaturesData = [
    { name: "Gorvax", power: 80 },
    { name: "Mireling", power: 45 },
    { name: "Thornbeast", power: 70 }
];

const newCreature = {name : "Shadow Wyrm", power: 60}


export default function Bestiary() {

    const [creatures, setCreatures] = useState(creaturesData.map(e => ({ ...e })))

    console.log(creatures)

    const handlerClick = () =>{
        setCreatures(prev => [...prev, newCreature])
    }


    return (
        <div>
            <h1>The Bestiary</h1>
            <ul>
                {creatures.map(e => <li key={e.name}>{e.name}</li>)}
            </ul>
            <button onClick={handlerClick}>ADD NEW CREATURE</button>

        </div>
    );
}