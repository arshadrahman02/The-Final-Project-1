import React, { useEffect, useRef, useState } from "react";
import login from "../assets/others/authentication2.png";
import background from "../assets/others/Rectangle 75.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disabled, setDisabled] = useState(true);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/4Kzv1s0/authentication.png")`,
      }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex gap-28">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <form
          onSubmit={handleLogIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl "
        >
          <div className="card-body">
            <h1 className="text-center text-3xl text-black font-bold mb-10">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label mx-auto mt-5">
                <br />
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type The Text Above"
                className="input input-bordered"
              />
              <button
                onClick={handleValidate}
                className="btn btn-xs btn-info w-3/6 mt-3 text-white font-bold "
              >
                validateCaptcha
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-info text-white"
                type="submit"
                value="LogIn"
              />
            </div>
            <Link to="/signUp">
              {" "}
              <p className="mx-auto text-info">
                New here?{" "}
                <span className="font-bold">Create a New Account</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
