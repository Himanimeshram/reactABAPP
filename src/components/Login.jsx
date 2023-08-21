import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/appointment_scheduling_app/login',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        }
      );

      const data = response.data;
      console.log('User data:', data);

      // Redirect to UserDetails route upon successful login
      navigate('/UserDetails', { state: { userData: data } });
    } catch (error) {
      setError('Error logging in.');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {error && <div className="text-danger mt-2">{error}</div>}
              </form>
              <p className="mt-3">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleSignupClick}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
