import { useState } from "react";

function NewLocation({ addLocation }) {
    const [newLocation, setNewLocation] = useState('')
    return (
        <div>
            <h3>Add new location</h3>
            <input
                value={newLocation}
                onChange={(event) => setNewLocation(event.target.value)}
            />
            <button onClick={() => {
                addLocation(newLocation)
                setNewLocation('')
            }} className="btn btn-primary">Add</button>    
        </div>
    )
}

export default NewLocation;