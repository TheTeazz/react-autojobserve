import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landing-page/landingPage";
import { LoginPage } from "./pages/loginPage/loginpage";
import { SignupPage } from "./pages/signupPage/signuppage";
import { EmailReset } from "./pages/passwordReset/emailReset/emailreset";
import { NewPassword } from "./pages/passwordReset/newPassword/newpassword";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Overview } from "./pages/dashboard/overview";
import { Applications } from "./pages/dashboard/applications";
import { Profile } from "./pages/dashboard/profile";
import { AutoApply } from "./pages/dashboard/autoApply";
import { JobMatches } from "./pages/dashboard/jobmatches";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/emailreset" element={<EmailReset />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auto-apply" element={<AutoApply />} />
        <Route path="/job-matches" element={<JobMatches />} />
      </Routes>
    </div>
  );
}

export default App;
