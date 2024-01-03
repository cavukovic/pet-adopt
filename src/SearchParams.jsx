import {useState, useEffect } from "react";
import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./UseBreedList";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState(""); // "" is default given to hook 
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal); // this is a custom hook

    useEffect(() => {
        requestPets();
    }, []); // empty array means that it only runs once when the component starts, putting animal in means it runs 
    // every time the animal changes, same if we add location etc

    async function requestPets() {
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);
    }
    // use effects mean go retrieve this or do something outside of this component (most of the time api functions), it also
    // runs every time the component is rendered 

    return (
        <div className="search-params">
            <form onSubmit={e=>{
                e.preventDefault();
                requestPets(); 
            }}>
                <label htmlFor="location">
                    Location
                    <input onChange={e=> setLocation(e.target.value)} id="location" value={location} placeholder="Enter Your Location" />
                </label>
                <label htmlFor="animal"> 
                    Animal
                    <select id="animal" value={animal} onChange={e=> {setAnimal(e.target.value); setBreed("")} }>
                        <option />
                        {ANIMALS.map(animal => 
                            (<option key={animal}>{animal}</option>)
                        )}
                    </select>
                </label>
                <label htmlFor="breed"> 
                    Breed
                    <select id="breed" disabled = {breeds.length === 0} value={breed} onChange={e=> setBreed(e.target.value)}>
                        <option />
                        {breeds.map(breed => 
                            (<option key={breed}>{breed}</option>)
                        )}
                    </select>
                </label>
                <button>Submit</button>
            </form> 
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;