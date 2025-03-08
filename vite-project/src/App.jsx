import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import Authlogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Authlogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
