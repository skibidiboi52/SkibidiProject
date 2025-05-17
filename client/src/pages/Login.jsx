import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-red-900 p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl mb-4">ReaperNodes Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3 p-2 w-full rounded"
        />
        <button type="submit" className="bg-black text-white w-full py-2 rounded hover:bg-red-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;