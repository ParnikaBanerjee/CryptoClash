import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import Authlogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import MainLayout from './components/main/layout';
import MainDashboard from './pages/main/Dashboard';
import MainLeaderboard from './pages/main/Leaderboard';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Authlogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/main" element={<MainLayout />}>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="leaderboard" element={<MainLeaderboard />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
