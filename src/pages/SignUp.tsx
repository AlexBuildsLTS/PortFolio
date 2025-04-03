import React, {useState} from 'react';
import {useAuth} from '../contexts/AuthContext';
import signUpUser from '../utils/api'; // Import signUpUser function
// Removed unused imports


export default function SignUp() {
    const { login } = useAuth(); // Access login to save user context
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await signUpUser({ data: { username, email, password } }); // API call
            localStorage.setItem('jwtToken', data.data.token); // Store the JWT token
            const response = await signUpUser({ data: { username, email, password } }); // API call
            localStorage.setItem('jwtToken', response.data.token); // Store the JWT token
            login(email); // Save user info in context
            console.log('Signed up and logged in with JWT:', response.data.token);
        }
        catch (error) {
            console.error('Error signing up:', error);
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-navy-primary text-slate-lightest">
            <div className="w-full max-w-md p-6 space-y-4 bg-navy-light rounded shadow">
                <h1 className="text-2xl font-bold">Sign Up</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-slate-light" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            required
                            className="w-full px-3 py-2 rounded bg-navy-primary text-slate-light focus:outline-none focus:border-green border border-slate"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

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
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}
