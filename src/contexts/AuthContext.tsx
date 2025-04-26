import React, { createContext, useContext, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

interface AuthContextType {
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userEmail, setUserEmail] = useState<string | null>(
    getFromLocalStorage('userEmail')
  );

  const login = (email: string) => {
    setUserEmail(email);
    saveToLocalStorage('userEmail', email);
  };

  const logout = () => {
    setUserEmail(null);
    saveToLocalStorage('userEmail', '');
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
