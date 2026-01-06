import type { JSX } from "react/jsx-dev-runtime";
import "./css/welcome.css";
import vector1 from "./assets/Vector 1.svg";
import vector2 from "./assets/Vector 2.svg";
import vector3 from "./assets/Vector 3.svg";
import vector4 from "./assets/Vector 4.svg";
import vector5 from "./assets/Vector 5.svg";
import vector from "./assets/vector.svg";
import rocket from "./assets/rocket-2-svgrepo-com 1.svg";

export const Welcome = (): JSX.Element => {
  return (
    <div className="welcome-container">
      <div className="background-blobs">
        <img className="blob-bottom-left" alt="Vector" src={vector1} />
        <img className="blob-bottom-center" alt="Vector" src={vector} />
        <img className="blob-bottom-right" alt="Vector" src={vector3} />
        <img className="blob-top-left" alt="Vector" src={vector4} />
        <img className="blob-top-right" alt="Vector" src={vector2} />
        <img className="blob-middle-right" alt="Vector" src={vector5} />
      </div>

      <div className="progress-bar-bg" />
      <div className="progress-bar-fill" />

      <div className="welcome-text">Welcome to</div>
      <div className="app-title">Voltzy</div>

      <button className="get-started-button">
        <img className="rocket-icon" alt="rocket" src={rocket} />
        <span className="button-text">Get started</span>
      </button>
    </div>
  );
};
