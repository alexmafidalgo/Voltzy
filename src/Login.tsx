import React, { useState } from 'react';
import './css/login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempted with:', { username, password });
    // Add your login logic here
  };

  const handleSignUp = () => {
    console.log('Navigate to sign up');
    // Add navigation logic here
  };

  return (
    <div className="login-container">
      <svg className="background-blobs" width="571" height="1020" viewBox="0 0 571 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M147.713 782.514C20.66 768.348 -22.3806 902.508 79.0895 991.176C112.164 1020.08 156.083 988.08 177.985 970.205C189.267 960.998 223.359 992.646 225.353 925.379C226.235 895.618 206.633 789.084 147.713 782.514Z" fill="url(#paint0_linear_57_32)"/>
        <path d="M377.9 229.533C404.592 302.878 489.651 290.056 510.651 210.511C517.496 184.583 485.325 150.69 472.371 162.095C461.874 171.336 470.241 212.405 431.851 197.767C415.617 191.577 365.523 195.521 377.9 229.533Z" fill="url(#paint1_linear_57_32)"/>
        <path d="M51.1332 375.867C51.1332 391.85 57.8124 407.571 72.7339 413.297C97.7562 422.899 132.277 424.467 133.77 389.195C136.414 326.696 97.2239 291.851 51.1332 292.981L51.1332 375.867Z" fill="url(#paint2_linear_57_32)"/>
        <path d="M474.713 433.635C347.66 419.469 304.62 553.629 406.09 642.297C439.164 671.198 483.083 639.2 504.985 621.326C516.267 612.119 550.36 643.767 552.353 576.5C553.235 546.739 533.633 440.204 474.713 433.635Z" fill="url(#paint3_linear_57_32)"/>
        <path d="M78.5392 127.954C102.594 212.215 206.705 189.829 240.914 94.1841C252.064 63.0083 218.27 47.4038 200.093 40.3243C190.73 36.6775 203.506 3.86168 156.522 27.275C135.735 37.6339 67.3841 88.8783 78.5392 127.954Z" fill="url(#paint4_linear_57_32)"/>
        <defs>
          <linearGradient id="paint0_linear_57_32" x1="-230.47" y1="1235.62" x2="-363.9" y2="737.658" gradientUnits="userSpaceOnUse">
            <stop offset="0.201923" stopColor="#78B85E"/>
            <stop offset="0.701923" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint1_linear_57_32" x1="493.066" y1="101.91" x2="701.045" y2="338.152" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.365385" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint2_linear_57_32" x1="-73.0427" y1="487.914" x2="-209.224" y2="91.0389" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.365385" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint3_linear_57_32" x1="96.5298" y1="778.625" x2="-36.9" y2="280.658" gradientUnits="userSpaceOnUse">
            <stop offset="0.201923" stopColor="#78B85E"/>
            <stop offset="0.701923" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint4_linear_57_32" x1="492.169" y1="197.241" x2="183.818" y2="462.787" gradientUnits="userSpaceOnUse">
            <stop offset="0.211538" stopColor="#78B85E"/>
            <stop offset="0.711538" stopColor="#1E7B45"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="profile-picture">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6db458de7b24599d0724eb1ec520230086ce99a9?width=364" 
          alt="Profile" 
        />
      </div>

      <h1 className="login-title">Log In</h1>

      <div className="login-modal">
        <div className="input-fields">
          <div className="input-field">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-control"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-control"
            />
          </div>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>
      </div>

      <div className="signup-section">
        <p className="signup-text">Don't have an account?</p>
        <button className="signup-link" onClick={handleSignUp}>
          Sign in <span className="underline">here</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
