<<<<<<< HEAD
import React, { useState } from 'react';

const BASE_URL = (import.meta as unknown as { env: { VITE_API_URL: string } })
  .env.VITE_API_URL; // API URL from environment

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Sign-up failed.');
      }

      setSuccess('Sign-up successful! Please log in.');
      setEmail('');
      setPassword('');
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred.'
      );
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-green-600 mb-6">
        Sign Up
      </h2>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
        <form onSubmit={handleSignUp} className="space-y-4">
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
=======
import React, {useState} from "react";

const BASE_URL = (import.meta as unknown as { env: { VITE_API_URL: string } }).env.VITE_API_URL; // API URL from environment

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/api/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Sign-up failed.");
            }

            setSuccess("Sign-up successful! Please log in.");
            setEmail("");
            setPassword("");
        } catch (err: unknown) {
            setError(
                err instanceof Error ? err.message : "An unknown error occurred."
            );
        }
    };

    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-center text-2xl font-bold text-green-600 mb-6">
                Sign Up
            </h2>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
                <form onSubmit={handleSignUp} className="space-y-4">
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
};

export default SignUp;
