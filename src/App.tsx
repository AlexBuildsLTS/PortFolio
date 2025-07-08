/* src/App.tsx */
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />
        {/* Login & SignUp routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
};

export default App;
