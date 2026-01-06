import image from "./image.svg";
import "./css/planApp.css";
import svgrepoIconcarrier from "./svgrepo-iconcarrier.png";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector from "./vector.svg";
import type { JSX } from "react/jsx-dev-runtime";

export const PlanApp = (): JSX.Element => {
  return (
    <div className="plan-app">
      <p className="this-will-help">
        This will help personalize <br />
        the app to your taste and use case
      </p>

      <img className="vector" alt="Vector" src={vector} />

      <div className="element">
        <div className="svgrepo-iconcarrier">
          <img className="img" alt="Vector" src={vector4} />

          <img className="vector-2" alt="Vector" src={vector5} />

          <img className="vector-3" alt="Vector" src={vector6} />

          <img className="vector-4" alt="Vector" src={vector7} />

          <img className="vector-5" alt="Vector" src={vector8} />

          <img className="vector-6" alt="Vector" src={vector9} />

          <img className="vector-7" alt="Vector" src={vector10} />
        </div>

        <div className="to-play-the-minigame">
          To play the <br />
          minigame
        </div>
      </div>

      <img className="vector-8" alt="Vector" src={vector3} />

      <div className="div">
        <div className="a-bit-of-everything">
          A bit of <br />
          everything..
        </div>

        <div className="vector-wrapper">
          <img className="vector-9" alt="Vector" src={vector13} />
        </div>
      </div>

      <img className="vector-10" alt="Vector" src={vector2} />

      <div className="element-2">
        <div className="svgrepo-iconcarrier-2">
          <img className="vector-11" alt="Vector" src={vector11} />

          <img className="vector-12" alt="Vector" src={vector12} />
        </div>

        <div className="to-monitor">
          To monitor
          <br /> consumptions
        </div>
      </div>

      <img className="vector-13" alt="Vector" src={image} />

      <div className="element-3">
        <img
          className="svgrepo-iconcarrier-3"
          alt="Svgrepo iconcarrier"
          src={svgrepoIconcarrier}
        />

        <div className="to-remote-control-my">
          To remote control
          <br />
          my appliances
        </div>
      </div>

      <p className="text-wrapper">How do you plan to use the app?</p>

      <div className="progress-bar">
        <div className="rectangle" />
      </div>
    </div>
  );
};
