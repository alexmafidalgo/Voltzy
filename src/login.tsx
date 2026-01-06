// import { Modal } from "./Modal";
// import { Pfp } from "./Pfp";
// import ellipse49 from "./ellipse-49.svg";
// import ellipse50 from "./ellipse-50.svg";
// import ellipse51 from "./ellipse-51.svg";
// import ellipse52 from "./ellipse-52.svg";
// import ellipse54 from "./ellipse-54.svg";
import "./css/login.css";
import type { JSX } from "react/jsx-dev-runtime";

export const LogIn = (): JSX.Element => {
  return (
    <div className="log-in">
      <div className="blobs">
        {/* <img className="ellipse" alt="Ellipse" src={ellipse50} />

        <img className="img" alt="Ellipse" src={ellipse49} />

        <img className="ellipse-2" alt="Ellipse" src={ellipse52} />

        <img className="ellipse-3" alt="Ellipse" src={ellipse51} />

        <img className="ellipse-4" alt="Ellipse" src={ellipse54} /> */}
      </div>

      <p className="sign-in-here">
        <span className="span">Sign in </span>

        <span className="text-wrapper-2">here</span>
      </p>

      <div className="div">Don't have an account?</div>

      <div className="text-wrapper-3">Log In</div>

      {/* <Pfp className="pfp-instance" />
      <Modal
        className="modal-instance"
        hasFrame={false}
        inputFieldStateDefaultValueClassName="modal-3"
        inputFieldStateDefaultValueClassNameOverride="modal-4"
        inputFieldValue="username"
        inputFieldValue1="password"
        inputFieldsClassName="modal-2"
        loginButtonText="Log in"
        visible={false}
        visible1={false}
      /> */}
    </div>
  );
};
