import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
      <BrowserRouter>
      <header> 
        <Link to = "/">Adopt a pet</Link>
      </header>
        <div>
            <Routes>
              <Route path="/details/:id" element={<Details/>} /> 
              <Route path="/" element={<SearchParams/>} />
            </Routes>
        </div>
      </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />); 
