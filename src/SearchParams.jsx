import {useQuery} from "@tanstack/react-query";
import {useState, useContext} from "react";
import Pet from "./Pet";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./UseBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    });
    const [animal, setAnimal] = useState(""); // "" is default given to hook 
    const [breeds] = useBreedList(animal); // this is a custom hook
    const [adoptedPet, _] = useContext(AdoptedPetContext); // this is a context hook (_ means we wont use it)

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results.data?.pets ?? [];

    // useEffect(() => {
    //     requestPets();
    // }, []); // empty array means that it only runs once when the component starts, putting animal in means it runs 
    // every time the animal changes, same if we add location etc

    // async function requestPets() {
    //     const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    //     const json = await res.json();
    //     setPets(json.pets);
    // }
    // use effects mean go retrieve this or do something outside of this component (most of the time api functions), it also
    // runs every time the component is rendered 

    return (
        <div className="search-params">
            <form onSubmit={e=>{
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    location: formData.get("location") ?? "",
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? ""
                }
                setRequestParams(obj);
            }}>
                {
                    adoptedPet ? (
                        <div className="pet image-container"> 
                            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                        </div>
                    ) : null
                }
                <label htmlFor="location">
                    Location
                    <input name="location" id="location" placeholder="Enter Your Location" />
                </label>
                <label htmlFor="animal"> 
                    Animal
                    <select id="animal" value={animal} onChange={e=> {setAnimal(e.target.value);} }>
                        <option />
                        {ANIMALS.map(animal => 
                            (<option key={animal}>{animal}</option>)
                        )}
                    </select>
                </label>
                <label htmlFor="breed"> 
                    Breed
                    <select id="breed" disabled = {breeds.length === 0} name="breed">
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