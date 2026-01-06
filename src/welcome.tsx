import type { JSX } from "react/jsx-dev-runtime";
import image from "./assets/img.svg";
import "./css/welcome.css";
import vector1 from "./assets/vector 1.svg";
import vector2 from "./assets/vector 2.svg";
import vector3 from "./assets/vector 3.svg";
import vector4 from "./assets/vector 4.svg";
import vector5 from "./assets/vector 5.svg";
import vector from "./assets/vector.svg";
import rocket from "./assets/rocket-2-svgrepo-com 1.svg";

export const Welcome = (): JSX.Element => {
  return (
    <div className="welcome">
      <div className="blobs">
        <img className="vector" alt="Vector" src={vector1} />

        <img className="vector-6" alt="Vector" src={vector} />

        <img className="vector-2" alt="Vector" src={vector3} />

        <img className="vector-3" alt="Vector" src={vector4} />

        <img className="vector-4" alt="Vector" src={vector2} />

        <img className="vector-5" alt="Vector" src={vector5} />
      </div>

      <div className="rectangle" />

      <div className="div" />

      <div className="text-wrapper">Welcome to</div>

      <div className="text-wrapper-2">Voltzy</div>

      <img className="rocket" alt="Vector" src={rocket} />

      <img className="img" alt="Vector" src={image} />

      <div className="text-wrapper-3">Get started</div>

    </div>
  );
};
