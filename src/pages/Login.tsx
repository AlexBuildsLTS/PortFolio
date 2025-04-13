<<<<<<< HEAD
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { login } = useAuth(); // Access the login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Use the login function from AuthContext
    login(email);
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-navy-primary text-slate-lightest">
      <div className="w-full max-w-md p-6 space-y-4 bg-navy-light rounded shadow">
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-slate-light" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border border-slate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-light" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-3 py-2 rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border border-slate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-semibold text-green border border-green rounded hover:bg-green hover:text-navy-primary"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-slate">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-green hover:text-slate-lightest">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
=======
import React, {useState} from 'react';
import {useAuth} from '../contexts/AuthContext';

export default function Login() {
    const { login } = useAuth(); // Access the login function from AuthContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use the login function from AuthContext
        login(email);
        console.log('Logged in with:', { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-navy-primary text-slate-lightest">
            <div className="w-full max-w-md p-6 space-y-4 bg-navy-light rounded shadow">
                <h1 className="text-2xl font-bold">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-slate-light" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border border-slate"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-slate-light" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border border-slate"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 font-semibold text-green border border-green rounded hover:bg-green hover:text-navy-primary"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-sm text-slate">
                    Don&apos;t have an account?{' '}
                    <a href="/signup" className="text-green hover:text-slate-lightest">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
}
