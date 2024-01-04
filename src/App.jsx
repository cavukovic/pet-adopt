import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
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
  return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header> 
            <Link to = "/">Adopt a pet</Link>
          </header>
          <div>
              <Routes>
                <Route path="/details/:id" element={<Details/>} /> 
                <Route path="/" element={<SearchParams/>} />
              </Routes>
          </div>
          </QueryClientProvider>
      </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />); 
