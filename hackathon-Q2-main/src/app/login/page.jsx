'use client';  // Ensure this is a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/router';  // Correct import for client-side routing
import Image from 'next/image';
import hero from "../../../public/images/justdoit.png"; // Add the image path

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);  // Track whether the user is registering
  const router = useRouter();  // Use next/router here for client-side routing

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering ? 'http://localhost:5000/register' : 'http://localhost:5000/login';

    // POST data to Flask backend (either login or register)
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      if (!isRegistering) {
        router.push('/home'); // Redirect to home page if login is successful
      } else {
        setError('Registration successful! You can now log in.');
        setIsRegistering(false);  // Switch back to login view
      }
    } else {
      setError(data.message || 'An error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          <Image src={hero} alt='hero' className='hidden md:flex w-1/2 bg-gradient-to-r from-gray-900 to-gray-800 flex-col items-center justify-center text-white' />
          
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              {isRegistering ? 'CREATE YOUR ACCOUNT' : 'YOUR ACCOUNT FOR EVERYTHING NIKE'}
            </h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
              >
                {isRegistering ? 'SIGN UP' : 'LOG IN'}
              </button>

              <p className="mt-4 text-center text-sm text-gray-700">
                {isRegistering ? 'Already a member?' : "Don't have an account?"} 
                <button 
                  type="button" 
                  onClick={() => setIsRegistering(!isRegistering)} 
                  className="font-semibold text-gray-900 hover:underline"
                >
                  {isRegistering ? 'Log In' : 'Join Now'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
