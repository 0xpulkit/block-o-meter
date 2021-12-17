import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Metrics from './Components/Metrics';
import Developer from './Components/Developer';

function App() {
  return (
    
    <div> 
      <BrowserRouter> 
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:coinId" element={<Metrics/>} />
            <Route path="/dev/:coinId" element={<Developer/>} />
          </Routes>
          
     </BrowserRouter>
      

    </div>
  );
}

export default App;
