import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Config/userContext";
import Login from "./Components/Login";
import AdminCalendar from "./Pages/AdminCalendar";
import AdminOverview from "./Pages/AdminOverview";
import AdminReports from "./Pages/AdminReports";
import AdminServices from "./Pages/AdminServices";
import AdminSettings from "./Pages/AdminSettings";
import RegisterAdminUser from "./Components/RegisterAdminUser";
import RegisterBusiness from "./Components/RegisterBusiness";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/AdminOverview" element={<AdminOverview />} />
            <Route path="/AdminCalendar" element={<AdminCalendar />} />
            <Route path="/AdminServices" element={<AdminServices />} />
            <Route path="/AdminReports" element={<AdminReports />} />
            <Route path="/AdminSettings" element={<AdminSettings />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RegisterAdminUser" element={<RegisterAdminUser />} />
            <Route path="/RegisterBusiness" element={<RegisterBusiness />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
