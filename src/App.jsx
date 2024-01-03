import ReactDOM from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
        <div>
            <h1>Adopt a pet</h1>
            <Pet
              name="Rover"
              animal="Dog"
              breed="Golden Retriever"
            />
            <Pet
              name="Max"
              animal="Bird"
              breed="Parrot"
            />
            <Pet
            name="Oliver"
            animal="Cat"
            breed="Persian" 
            />
            <SearchParams />
        </div>
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />); 
