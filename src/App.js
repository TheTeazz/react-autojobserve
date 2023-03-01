import "./App.css";
import {  Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landing-page/landingPage";
import { LoginPage } from "./pages/loginPage/loginpage";
import { SignupPage } from "./pages/signupPage/signuppage";
import { EmailReset } from "./pages/passwordReset/emailReset/emailreset"
import { NewPassword } from "./pages/passwordReset/newPassword/newpassword"

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/emailreset" element={<EmailReset />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Routes>
    
    </div>
  );
}

export default App;
