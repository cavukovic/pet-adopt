import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams(); // use params gets the id from the browser router 
    return (
        <div>
            <h2>{id}</h2> 
        </div>
    )
};
export default Details;