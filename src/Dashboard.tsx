import React, { useState } from 'react';
import './css/Dashboard.css';

interface LightsState {
  kitchen: boolean;
  bedroom: boolean;
  bathroom: boolean;
  livingRoom: boolean;
}

type RoutineType = 'night' | 'day' | 'eco' | 'comfort';

interface LightControlProps {
  name: string;
  usage: string;
  isOn: boolean;
  onToggle: () => void;
}

const Dashboard: React.FC = () => {
  const [lights, setLights] = useState<LightsState>({
    kitchen: true,
    bedroom: true,
    bathroom: true,
    livingRoom: true
  });

  const [activeRoutine, setActiveRoutine] = useState<RoutineType | null>(null);

  const toggleLight = (room: keyof LightsState): void => {
    setLights(prev => ({
      ...prev,
      [room]: !prev[room]
    }));
  };

  const toggleRoutine = (routine: RoutineType): void => {
    setActiveRoutine(prev => prev === routine ? null : routine);
  };

  return (
    <div className="dashboard">
      <svg className="background-blobs" width="412" height="660" viewBox="0 0 412 660" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M33.5993 422.797C61.4229 417.191 85.4313 442.231 102.898 464.603C120.096 486.63 138.426 515.978 125.823 540.921C113.96 564.397 77.8103 551.084 53.7879 561.794C31.6269 571.675 18.6665 606.177 -4.52229 599.035C-27.9871 591.808 -32.2804 559.612 -32.9863 535.069C-33.5347 516.004 -17.4767 503.3 -7.74767 486.895C5.8979 463.887 7.37698 428.08 33.5993 422.797Z" fill="url(#paint0_linear_127_710)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M280.596 425.027C318.109 405.178 353.296 453.944 393.442 467.086C416.366 474.59 447.171 463.537 460.182 483.817C473.242 504.174 458.132 529.908 447.9 551.97C439.28 570.556 427.904 588.559 408.53 595.189C389.351 601.754 371.254 590.433 351.847 584.843C312.704 573.57 258.563 584.404 241.988 547.225C223.767 506.355 240.838 446.064 280.596 425.027Z" fill="url(#paint1_linear_127_710)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M352.326 23.5498C368.282 23.8193 382.929 32.3974 388.538 47.4097C395.077 64.911 395.023 86.4816 379.916 97.3915C364.972 108.183 345.347 100.341 330.647 89.2168C316.899 78.8129 306.745 62.5345 312.164 46.1197C317.504 29.9459 335.371 23.2634 352.326 23.5498Z" fill="url(#paint2_linear_127_710)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.9998 190.616C38.0892 190.625 53.567 202.597 68.8732 213.996C88.1905 228.384 119.227 239.837 117.313 263.837C115.381 288.053 79.0894 289.541 61.5089 306.318C44.7983 322.265 41.6497 353.092 18.9998 357.657C-4.99039 362.492 -31.9927 348.506 -44.9859 327.781C-56.7959 308.942 -42.5434 285.9 -39.8171 263.837C-37.6636 246.41 -41.919 227.644 -30.9196 213.95C-18.9649 199.068 -0.0971985 190.607 18.9998 190.616Z" fill="#3C8B52"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M432.182 295.366C425.305 311.942 414.14 326.616 397.835 334.131C378.831 342.89 356.922 347.061 337.615 338.951C316.612 330.128 294.255 313.023 293.437 290.275C292.649 268.357 321.596 259.807 334.122 241.811C343.999 227.621 341.734 204.392 357.754 197.87C374.155 191.193 392.216 202.196 406.835 212.208C419.835 221.112 428.393 234.333 432.985 249.397C437.632 264.641 438.285 280.653 432.182 295.366Z" fill="url(#paint3_linear_127_710)"/>
        <path d="M112.5 155.18C182.231 155.18 94.9096 -11.6795 165.5 -3.9997C175.178 -71.9811 170.731 -38.5711 101 -38.5711C63.9272 -38.5711 -10.4988 -56.1013 -0.246935 -23.7987C-55.752 16.1209 19.0604 -40.8173 1.75173 -15.4997C-25.7482 37.0003 30.3974 142.521 112.5 155.18Z" fill="url(#paint4_linear_127_710)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M230.883 91.0368C241.833 91.6298 249.847 100.826 256.674 109.436C262.591 116.897 265.04 125.826 265.996 135.312C267.105 146.309 269.872 158.819 262.479 167.013C254.944 175.367 241.987 175.915 230.883 174.236C221.293 172.786 213.95 166.032 207.563 158.71C201.715 152.004 197.332 144.174 196.413 135.312C195.366 125.214 195.979 114.53 202.149 106.483C209.036 97.4996 219.604 90.4259 230.883 91.0368Z" fill="url(#paint5_linear_127_710)"/>
        <defs>
          <linearGradient id="paint0_linear_127_710" x1="-108.717" y1="642.914" x2="-108.717" y2="432.678" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint1_linear_127_710" x1="321.559" y1="763.808" x2="138.762" y2="581.011" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint2_linear_127_710" x1="258.008" y1="110.046" x2="258.008" y2="16.7388" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint3_linear_127_710" x1="355.405" y1="105.687" x2="488.087" y2="178.151" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint4_linear_127_710" x1="57.1856" y1="-44.8134" x2="57.1856" y2="180.187" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
          <linearGradient id="paint5_linear_127_710" x1="169.003" y1="195.251" x2="169.003" y2="96.0387" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78B85E"/>
            <stop offset="0.908654" stopColor="#1E7B45"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="liquid-glass-header">
        <img className="noise-bg" src="https://api.builder.io/api/v1/image/assets/TEMP/cc2ca300b9689230efd3c5dcecd36d0959dfe6eb?width=824" alt="" />
        <div className="header-content">
          <svg className="home-icon" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.625 43.0832V23.4998H29.375V43.0832M5.875 17.6248L23.5 3.9165L41.125 17.6248V39.1665C41.125 40.2053 40.7124 41.2015 39.9778 41.936C39.2433 42.6705 38.2471 43.0832 37.2083 43.0832H9.79167C8.7529 43.0832 7.75668 42.6705 7.02216 41.936C6.28765 41.2015 5.875 40.2053 5.875 39.1665V17.6248Z" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="greeting-container">
            <div className="greeting-text">Hello, user</div>
            <div className="divider"></div>
          </div>
          <div className="profile-pic">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/b91e984747ee07f07988d3e3b25238dbe77ace1c?width=98" alt="Profile" />
          </div>
        </div>
        <div className="house-id">House 1</div>
      </div>

      <div className="general-view-section">
        <div className="stat-card">
          <div className="stat-label">Lights on</div>
          <div className="stat-value-large">5</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Energy Used</div>
          <div className="stat-value-large">32.4<span className="stat-unit">kW/h</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Energy Saved</div>
          <div className="stat-value-large">14.8<span className="stat-unit">kWh</span></div>
        </div>
      </div>

      <div className="consumption-section">
        <div className="section-title">Today's Consumption</div>
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/515160c27383900e3333c69992ef6db5ba2fc4cd?width=760" alt="Consumption Graph" className="consumption-graph" />
      </div>

      <div className="lights-section">
        <div className="section-title">Lights</div>
        <div className="lights-grid">
          <LightControl 
            name="Kitchen" 
            usage="8.2 kW/h" 
            isOn={lights.kitchen} 
            onToggle={() => toggleLight('kitchen')} 
          />
          <LightControl 
            name="Bedroom" 
            usage="8.2 kW/h" 
            isOn={lights.bedroom} 
            onToggle={() => toggleLight('bedroom')} 
          />
          <LightControl 
            name="Bathroom" 
            usage="8.2 kW/h" 
            isOn={lights.bathroom} 
            onToggle={() => toggleLight('bathroom')} 
          />
          <LightControl 
            name="Living Room" 
            usage="8.2 kW/h" 
            isOn={lights.livingRoom} 
            onToggle={() => toggleLight('livingRoom')} 
          />
        </div>
      </div>

      <div className="routines-section">
        <div className="section-title">Routines</div>
        <div className="routines-grid">
          <button
            className={`routine-button ${activeRoutine === 'night' ? 'active' : ''}`}
            onClick={() => toggleRoutine('night')}
          >
            Night
          </button>
          <button
            className={`routine-button ${activeRoutine === 'day' ? 'active' : ''}`}
            onClick={() => toggleRoutine('day')}
          >
            Day
          </button>
          <button
            className={`routine-button ${activeRoutine === 'eco' ? 'active' : ''}`}
            onClick={() => toggleRoutine('eco')}
          >
            Eco
          </button>
          <button
            className={`routine-button ${activeRoutine === 'comfort' ? 'active' : ''}`}
            onClick={() => toggleRoutine('comfort')}
          >
            Comfort
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/b10277e0732e74958121c0320dc326174eda8cbc?width=464" alt="Action Buttons" className="buttons-image" />
      </div>

      <nav className="navbar">
        <div className="nav-background"></div>
        <svg className="nav-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 36.6666V19.9999H25V36.6666M5 14.9999L20 3.33325L35 14.9999V33.3333C35 34.2173 34.6488 35.0652 34.0237 35.6903C33.3986 36.3154 32.5507 36.6666 31.6667 36.6666H8.33333C7.44928 36.6666 6.60143 36.3154 5.97631 35.6903C5.35119 35.0652 5 34.2173 5 33.3333V14.9999Z" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="nav-icon" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.6111 19.4399C34.2096 12.9415 32.1308 8.7962 28.7991 7.78604C28.1538 7.59298 27.4847 7.49667 26.8125 7.5001C24.7643 7.5001 23.1479 8.7501 19.5 8.7501C15.8522 8.7501 14.2327 7.5001 12.1875 7.5001C11.4873 7.49639 10.79 7.59262 10.1157 7.78604C6.77933 8.7962 4.71812 12.9454 3.30056 19.4399C1.85329 26.0735 2.11532 31.3149 4.94435 32.3212C6.92482 33.0243 8.69581 31.5704 10.3731 29.4306C12.2774 26.9931 14.6227 26.2431 19.5 26.2431C24.3773 26.2431 26.6312 26.9931 28.5386 29.4306C30.2144 31.572 32.0509 33.0079 33.9788 32.3337C37.1033 31.2392 37.0592 26.1517 35.6111 19.4399Z" stroke="#43734C" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M22.2422 19.0625C23.0836 19.0625 23.7656 18.3629 23.7656 17.5C23.7656 16.6371 23.0836 15.9375 22.2422 15.9375C21.4008 15.9375 20.7188 16.6371 20.7188 17.5C20.7188 18.3629 21.4008 19.0625 22.2422 19.0625Z" fill="#43734C"/>
          <path d="M25.5937 22.5C25.2923 22.5 24.9976 22.4083 24.747 22.2364C24.4964 22.0645 24.3011 21.8203 24.1859 21.5345C24.0707 21.2488 24.0408 20.9344 24.0999 20.6312C24.159 20.328 24.3044 20.0496 24.5179 19.8313C24.7313 19.6129 25.0031 19.4644 25.2989 19.4045C25.5946 19.3447 25.9011 19.3762 26.1794 19.4951C26.4577 19.6139 26.6954 19.8148 26.8623 20.0723C27.0292 20.3297 27.1179 20.6322 27.1172 20.9414C27.1162 21.3551 26.9552 21.7516 26.6696 22.0437C26.384 22.3359 25.9971 22.5 25.5937 22.5Z" fill="#43734C"/>
          <path d="M25.5938 15.625C26.4351 15.625 27.1172 14.9254 27.1172 14.0625C27.1172 13.1996 26.4351 12.5 25.5938 12.5C24.7524 12.5 24.0703 13.1996 24.0703 14.0625C24.0703 14.9254 24.7524 15.625 25.5938 15.625Z" fill="#43734C"/>
          <path d="M28.9453 19.0625C29.7867 19.0625 30.4688 18.3629 30.4688 17.5C30.4688 16.6371 29.7867 15.9375 28.9453 15.9375C28.1039 15.9375 27.4219 16.6371 27.4219 17.5C27.4219 18.3629 28.1039 19.0625 28.9453 19.0625Z" fill="#43734C"/>
          <path d="M12.1875 13.75V21.25" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.8438 17.5H8.53125" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="nav-home-button">
          <svg className="nav-home-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 31.6667H25.0001V19.9999H15.0001V31.6667ZM5 14.9999L20.0001 3.33325L35 14.9999V33.3333C35 34.2173 34.6488 35.0652 34.0237 35.6903C33.3986 36.3154 32.5507 36.6666 31.6667 36.6666H8.33333C7.44928 36.6666 6.60143 36.3154 5.97631 35.6903C5.35119 35.0652 5 34.2173 5 33.3333V14.9999Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <svg className="nav-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 33.3333H9.99992C6.31802 33.3333 3.33325 30.3485 3.33325 26.6667V11.6667C3.33325 7.98477 6.31802 5 9.99992 5H28.3333C32.0151 5 34.9999 7.98477 34.9999 11.6667V16.6667" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3333 3.33325V6.66659" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 3.33325V6.66659" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33325 13.3333H34.9999" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.8333 26.0715L28.3333 28.5715" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28.3333 36.6667C32.9357 36.6667 36.6667 32.9357 36.6667 28.3333C36.6667 23.731 32.9357 20 28.3333 20C23.731 20 20 23.731 20 28.3333C20 32.9357 23.731 36.6667 28.3333 36.6667Z" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="nav-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66675 8.33325V31.6666C6.66675 32.5871 7.41295 33.3333 8.33341 33.3333H31.6667" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.0001 15L21.6667 23.3332L17.5001 19.1663L11.6667 24.9997" stroke="#43734C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </nav>
    </div>
  );
};

const LightControl: React.FC<LightControlProps> = ({ name, usage, isOn, onToggle }) => {
  return (
    <div className="light-control">
      <div className="light-info">
        <div className="light-name">{name}</div>
        <div className="light-usage">{usage}</div>
      </div>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={onToggle}>
        <div className="toggle-knob"></div>
      </div>
    </div>
  );
};

export default Dashboard;
