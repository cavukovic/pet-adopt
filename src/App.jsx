import ReactDOM from "react-dom/client";
import {useState} from "react";
import {Link} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";

const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
      staleTime: Infinity, // makes cache time for whole session
      cacheTime: Infinity,
    }
  }
});

const App = () => {
  const adoptedPet = useState(null); // this is the whole hook, so when it's passed the child can read and writes
  return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}> 
          {/* context is passed to details and searchparams */}
            <header> 
              <Link to = "/">Adopt a pet</Link>
            </header>
            <div>
                <Routes>
                  <Route path="/details/:id" element={<Details/>} /> 
                  <Route path="/" element={<SearchParams/>} />
                </Routes>
            </div>
          </AdoptedPetContext.Provider>
          </QueryClientProvider>
      </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />); 
