/* src/App.tsx */
import React from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
=======
import {Route, Routes} from 'react-router-dom';
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b

import Layout from './components/Layout';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
<<<<<<< HEAD
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
        {/* Login & SignUp routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
};

export default App;
=======
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<CalendarPage />} />
                {/* Login & SignUp routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Layout>
    );
};

export default App;
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
