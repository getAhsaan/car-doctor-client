import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">OR Sign in with</div>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-sm"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
        </button>
        <button className="btn btn-sm">
          <FaGithub className="text-2xl"></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
