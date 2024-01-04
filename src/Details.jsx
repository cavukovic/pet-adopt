import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {useState} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
    const [showModal, setShowModal] = useState(false);
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
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <hr></hr>
                    <button onClick={()=>{setShowModal(true)}}>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                    {
                        showModal ? 
                        (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {pet.name}</h1>
                                    <div className="buttons">
                                        <button>Yes</button>
                                        <button onClick={() => {setShowModal(false)}}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null }
                </h2>
            </div>
        </div>
    )
};

function DetailsErrorBoundary(){
    return (
        <ErrorBoundary>
            <Details/>
        </ErrorBoundary>
    )
}
export default DetailsErrorBoundary;