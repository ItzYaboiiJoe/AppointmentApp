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
          <Route path="/Overview" element={<AdminOverview />} />
          <Route path="/Calendar" element={<AdminCalendar />} />
          <Route path="/Services" element={<AdminServices />} />
          <Route path="/Reports" element={<AdminReports />} />
          <Route path="/Settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
