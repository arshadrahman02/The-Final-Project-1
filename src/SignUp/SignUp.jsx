import login from "../assets/others/authentication2.png";

import { Link } from "react-router-dom";

const SignUp = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/4Kzv1s0/authentication.png")`,
      }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-row-reverse gap-28">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <form
          onSubmit={handleLogIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl "
        >
          <div className="card-body">
            <h1 className="text-center text-3xl text-black font-bold mb-10">
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
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

            <div className="form-control mt-6">
              <input
                className="btn btn-info text-white"
                type="submit"
                value="LogIn"
              />
            </div>
            <Link to="/login">
              {" "}
              <p className="mx-auto text-info">
                Already registered?
                <span className="font-bold"> Go to log in</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
