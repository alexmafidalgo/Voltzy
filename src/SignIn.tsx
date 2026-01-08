import React, { useState } from 'react';
import './css/signin.css';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In attempted with:', { name, username, email, password });
  };

  const handleLoginClick = () => {
    console.log('Navigate to login');
  };

  return (
    <div className="signin-container">
      <svg className="background-blobs" width="590" height="1030" viewBox="0 0 590 1030" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M441.822 236.737C568.876 250.903 611.916 116.743 510.446 28.0749C477.372 -0.826491 433.453 31.1716 411.551 49.0457C400.268 58.253 366.176 26.605 364.183 93.8719C363.301 123.633 382.903 230.168 441.822 236.737Z" fill="url(#paint0_linear_89_128)"/>
        <path d="M201.145 731.996C174.454 658.652 89.3942 671.474 68.3946 751.019C61.5497 776.946 93.7199 810.839 106.675 799.434C117.171 790.194 108.804 749.124 147.194 763.762C163.429 769.953 213.523 766.009 201.145 731.996Z" fill="url(#paint1_linear_89_128)"/>
        <path d="M534.279 510.27C534.279 494.287 527.6 478.566 512.678 472.84C487.656 463.238 453.135 461.67 451.643 496.942C448.998 559.441 488.188 594.286 534.279 593.156L534.279 510.27Z" fill="url(#paint2_linear_89_128)"/>
        <path d="M95.8218 479.737C222.875 493.903 265.916 359.743 164.446 271.075C131.371 242.174 87.4525 274.172 65.55 292.046C54.2678 301.253 20.1756 269.605 18.1824 336.872C17.3005 366.633 36.9021 473.168 95.8218 479.737Z" fill="url(#paint3_linear_89_128)"/>
        <path d="M542.989 901.367C518.934 817.106 414.822 839.491 380.614 935.136C369.464 966.312 403.258 981.917 421.435 988.996C430.798 992.643 418.022 1025.46 465.006 1002.05C485.793 991.687 554.144 940.442 542.989 901.367Z" fill="url(#paint4_linear_89_128)"/>
        <defs>
          <linearGradient id="paint0_linear_89_128" x1="820.006" y1="-216.373" x2="953.436" y2="281.593" gradientUnits="userSpaceOnUse">
            <stop offset="0.201923" stopColor="#78B85E"/>
            <stop offset="0.701923" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint1_linear_89_128" x1="85.9792" y1="859.62" x2="-121.999" y2="623.377" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.365385" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint2_linear_89_128" x1="658.455" y1="398.223" x2="794.636" y2="795.098" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.365385" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint3_linear_89_128" x1="474.005" y1="134.747" x2="607.435" y2="632.714" gradientUnits="userSpaceOnUse">
            <stop offset="0.201923" stopColor="#78B85E"/>
            <stop offset="0.701923" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint4_linear_89_128" x1="129.359" y1="832.08" x2="437.71" y2="566.534" gradientUnits="userSpaceOnUse">
            <stop offset="0.211538" stopColor="#78B85E"/>
            <stop offset="0.711538" stopColor="#1E7B45"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="profile-section">
        <svg className="avatar" width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="182" height="182" rx="91" fill="url(#paint0_linear_165_1144)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M118.301 72.8C118.301 87.8774 106.078 100.1 91.0011 100.1C75.9237 100.1 63.7011 87.8774 63.7011 72.8C63.7011 57.7226 75.9237 45.5 91.0011 45.5C106.078 45.5 118.301 57.7226 118.301 72.8ZM109.201 72.8C109.201 82.8516 101.053 91 91.0011 91C80.9495 91 72.8011 82.8516 72.8011 72.8C72.8011 62.7484 80.9495 54.6 91.0011 54.6C101.053 54.6 109.201 62.7484 109.201 72.8Z" fill="#2E2E2E"/>
          <path d="M91.0011 113.75C61.5427 113.75 36.4433 131.169 26.8823 155.574C29.2114 157.887 31.665 160.074 34.2321 162.126C41.3516 139.72 63.6862 122.85 91.0011 122.85C118.316 122.85 140.651 139.72 147.77 162.126C150.337 160.074 152.791 157.887 155.12 155.574C145.559 131.169 120.46 113.75 91.0011 113.75Z" fill="#2E2E2E"/>
          <defs>
            <linearGradient id="paint0_linear_165_1144" x1="-84.5429" y1="225.878" x2="-84.5429" y2="10.9173" gradientUnits="userSpaceOnUse">
              <stop offset="0.0192308" stopColor="#989898" stopOpacity="0.15"/>
              <stop offset="0.403846" stopColor="#CDD5D0" stopOpacity="0.59"/>
              <stop offset="1" stopColor="#8CC8A2"/>
            </linearGradient>
          </defs>
        </svg>
        
        <button className="edit-profile-button" onClick={() => console.log('Edit profile picture')} aria-label="Edit profile picture">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4347 3.25773C19.7383 2.56508 18.796 2.17627 17.8138 2.17627C16.8315 2.17627 15.8892 2.56508 15.1928 3.25773L4.97549 13.4898L2.36934 18.8502C2.23538 19.1325 2.17448 19.444 2.19222 19.7559C2.20995 20.0679 2.30575 20.3704 2.47083 20.6357C2.63592 20.901 2.86499 21.1206 3.13702 21.2744C3.40906 21.4281 3.71536 21.5111 4.0278 21.5156C4.31053 21.5155 4.58937 21.4496 4.84222 21.3231L10.2026 18.717L19.0872 9.83235L20.3163 8.61811L20.4051 8.52927C21.1071 7.83363 21.5045 6.88791 21.5101 5.89962C21.5156 4.91134 21.1289 3.96121 20.4347 3.25773ZM19.1168 4.57561C19.2892 4.74755 19.426 4.95181 19.5193 5.17668C19.6126 5.40156 19.6606 5.64263 19.6606 5.8861C19.6606 6.12956 19.6126 6.37063 19.5193 6.59551C19.426 6.82038 19.2892 7.02464 19.1168 7.19658L16.4959 4.57561C16.8325 4.2336 17.2896 4.03694 17.7693 4.02773C18.0196 4.02068 18.2687 4.06574 18.5007 4.16005C18.7326 4.25437 18.9425 4.39589 19.1168 4.57561ZM4.0426 19.6498L6.3526 14.8077L8.88472 17.3398L4.0426 19.6498ZM10.2026 16.096L7.59645 13.4898L15.1928 5.92312L17.7693 8.49965L10.2026 16.096Z" fill="black"/>
          </svg>
        </button>
      </div>

      <h1 className="signin-title">Sign In</h1>

      <div className="form-modal">
        <div className="input-fields-container">
          <input
            type="text"
            className="text-input"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <input
            type="text"
            className="text-input"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="email"
            className="text-input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            className="text-input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="signin-button" onClick={handleSignIn}>
          Sign In
        </button>
      </div>

      <div className="login-redirect-section">
        <p className="account-question">Already have an account?</p>
        <button className="login-link" onClick={handleLoginClick}>
          Login in <span className="underline">here</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
