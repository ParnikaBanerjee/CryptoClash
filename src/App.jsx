import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import Authlogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import MainLayout from './components/main/layout';
import MainDashboard from './pages/main/Dashboard';
import MainRules from './pages/main/rules';
import MainTeam from './pages/main/addTeams';
import MainLeaderboard from './pages/main/Leaderboard';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "CryptoClash";
  }, []);
  return (
    <Router>
      <Routes>
        {/* Auth Pages - No Sidebar */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Authlogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Main Pages - Sidebar included inside MainLayout */}
        <Route path="/main" element={<MainLayout />}>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="leaderboard" element={<MainLeaderboard />} />
          <Route path="team" element={<MainTeam />} />
          <Route path="rules" element={<MainRules />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
