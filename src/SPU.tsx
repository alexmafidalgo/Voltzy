import image from "./image.svg";
import "./css/SPU.css";
import svgrepoIconcarrier from "./svgrepo-iconcarrier.png";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";
import type { JSX } from "react/jsx-dev-runtime";

export const Spu = (): JSX.Element => {
  return (
    <div className="SPU">
      <p className="this-will-help">
        This will help personalize <br />
        the app to your taste and use case
      </p>

      <img className="vector" alt="Vector" src={vector} />

      <div className="no">
        <img
          className="svgrepo-iconcarrier"
          alt="Svgrepo iconcarrier"
          src={svgrepoIconcarrier}
        />

        <div className="text-wrapper">No, I do not</div>
      </div>

      <img className="img" alt="Vector" src={image} />

      <div className="yes">
        <div className="div">Yes, I do</div>

        <div className="vector-wrapper">
          <img className="vector-2" alt="Vector" src={vector2} />
        </div>
      </div>

      <p className="p">Do you own a self-powering unit? (solar panels, etc.)</p>

      <div className="progress">
        <div className="rectangle" />
      </div>
    </div>
  );
};
