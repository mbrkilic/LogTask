import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Register from "./screens/Register";

import Login from "./screens/Login";

function App() {


  return ( 
  
  <Router> 
  <Navbar/>
   

    <Routes>

    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />

    </Routes>
    
    
    </Router>
  );
}

export default App;
