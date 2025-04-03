import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import {ThemeProvider} from './contexts/ThemeContext';
import {AuthProvider} from './contexts/AuthContext'; // Import AuthProvider
import './index.css';
import './styles/global.css';

const rootElement = document.getElementById('root');
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