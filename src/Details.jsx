import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
    const {id} = useParams(); // use params gets the id from the browser router 
    const results = useQuery(["details", id], fetchPet);

    if(results.isLoading){
        return(
            <div className="loading-pane">
                <h2 className = "loader">꩜</h2>
            </div>
        )
    }

    // we can assume at this point on that pet is loaded

    const pet = results.data.pets[0];

    return (
        <div className = "details">
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <hr></hr>
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    )
};
export default Details;