import React from "react";
import loginPic from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
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
            <h2 className="text-4xl text-center font-bold">Login</h2>
            <form onSubmit={handleLogin}>
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
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">Or Sign In with</p>

            <div className="flex mx-auto gap-4">
              <button className="btn btn-sm">
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
              <button className="btn btn-sm">
                <FaGithub className="text-2xl"></FaGithub>
              </button>
            </div>
            <p className="text-center">
              Don't have an account? Please{" "}
              <Link
                to={"/register"}
                className="text-secondary"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
