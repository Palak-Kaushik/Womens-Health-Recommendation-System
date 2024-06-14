import './App.css';
import LLM from './sections/llm.js';
import Recommendation from './sections/recommendation.js';
import HomePage from './sections/home.js';



import Navbar from "./navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/llm" element={<LLM />} />
                <Route path="/recommendation" element={<Recommendation />} />
                
            </Routes>
        </Router>


  );
}

export default App;
