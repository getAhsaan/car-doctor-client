import React from "react";
import loginPic from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:gap-32 lg:flex-row">
        <div>
          <img
            src={loginPic}
            alt=""
          />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-4xl text-center font-bold">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
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
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              Have an account? Please{" "}
              <Link
                to={"/login"}
                className="text-secondary"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
