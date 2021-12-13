// create your App component here
import React, { useState } from "react";
import { useEffect } from "react";

function App(){
    const [doggies, setDoggies] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((obj) => obj.json())
        .then((data) => {
            setDoggies(data.message)
        })
    }, [])

    if (!doggies) return <p>Loading...</p>

    return (
        <div className="doggies">
            <img src={doggies} alt="A Random Dog" />
        </div>
    )

}

export default App