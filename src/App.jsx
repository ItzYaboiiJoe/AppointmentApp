import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AdminCalendar from "./Pages/AdminCalendar";
import AdminOverview from "./Pages/AdminOverview";
import AdminReports from "./Pages/AdminReports";
import AdminServices from "./Pages/AdminServices";
import AdminSettings from "./Pages/AdminSettings";

function App() {
  return (
    <Router>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<AdminOverview />} />
          <Route path="/AdminOverview" element={<AdminOverview />} />
          <Route path="/AdminCalendar" element={<AdminCalendar />} />
          <Route path="/AdminServices" element={<AdminServices />} />
          <Route path="/AdminReports" element={<AdminReports />} />
          <Route path="/AdminSettings" element={<AdminSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
