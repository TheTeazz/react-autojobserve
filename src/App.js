import "./App.css";
import {  Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landing-page/landingPage";
import { Loginpage } from "./pages/loginPage/loginpage";
import { Signuppage } from "./pages/signupPage/signuppage";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
    
    </div>
  );
}

export default App;
