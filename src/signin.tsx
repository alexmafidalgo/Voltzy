// import { Modal } from "./Modal";
import ellipse49 from "./ellipse-49.svg";
import ellipse50 from "./ellipse-50.svg";
import ellipse51 from "./ellipse-51.svg";
import ellipse52 from "./ellipse-52.svg";
import ellipse54 from "./ellipse-54.svg";
import "./css/signin.css";
import type { JSX } from "react/jsx-dev-runtime";

export const SignIn = (): JSX.Element => {
  return (
    <div className="sign-in">
      <div className="blobs">
        <img className="ellipse" alt="Ellipse" src={ellipse50} />

        <img className="img" alt="Ellipse" src={ellipse49} />

        <img className="ellipse-2" alt="Ellipse" src={ellipse52} />

        <img className="ellipse-3" alt="Ellipse" src={ellipse51} />

        <img className="ellipse-4" alt="Ellipse" src={ellipse54} />
      </div>

      <p className="login-in-here">
        <span className="span">Login in </span>

        <span className="text-wrapper-2">here</span>
      </p>

      <div className="div">Already have an account?</div>

      <div className="text-wrapper-3">Sign In</div>

      {/* <Modal
        className="modal-instance"
        hasFrame={false}
        inputFieldValue="password"
        inputFieldValue1="name"
        inputFieldValue2="username"
        inputFieldValue3="email"
        inputFieldsClassName="modal-2"
        loginButtonStateDefaultClassName="modal-3"
        loginButtonText="Sign In"
      /> */}
      <div className="profile-pic">
        <div className="edit-profile-picture">
          <div className="pencil-svgrepo-com">
            <div className="svgrepo-iconcarrier" />
          </div>
        </div>
      </div>
    </div>
  );
};
