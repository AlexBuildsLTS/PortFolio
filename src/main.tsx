import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
=======
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import {ThemeProvider} from './contexts/ThemeContext';
import {AuthProvider} from './contexts/AuthContext'; // Import AuthProvider
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
import './index.css';
import './styles/global.css';

const rootElement = document.getElementById('root');
<<<<<<< HEAD
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  // Use React.StrictMode to help with identifying potential problems in the application

  <React.StrictMode>
    {/* Wrap the App with ThemeProvider and AuthProvider */}

    <ThemeProvider>
      <AuthProvider>
        {' '}
        {/* Wrap with AuthProvider */}
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
=======
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
    // Use React.StrictMode to help with identifying potential problems in the application
     
    <React.StrictMode>
        {/* Wrap the App with ThemeProvider and AuthProvider */}

        <ThemeProvider>
            <AuthProvider> {/* Wrap with AuthProvider */}
                <Router>
                    <App />
                </Router>
            </AuthProvider>
        </ThemeProvider>    
    </React.StrictMode>
    
);
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
