import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/calendar'); // Redirect to calendar on successful sign-up
    } catch (err) {
      setError('Failed to sign up. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-navy-primary text-slate-lightest">
      <div className="w-full max-w-md p-6 space-y-4 rounded shadow bg-navy-light">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-slate-light" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border-slate"
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
              className="w-full px-3 py-2 border rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border-slate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 font-semibold border rounded text-green border-green hover:bg-green hover:text-navy-primary disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
