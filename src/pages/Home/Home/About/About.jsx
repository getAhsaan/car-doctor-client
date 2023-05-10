import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2 relative">
        <img
          src={person}
          className="max-w-sm rounded-lg shadow-2xl h-[350px]"
        />
        <img src={parts} alt="" className="w-[200px] h-[200px] absolute top-52 left-60 border-4 border-white" />
        </div>
        <div className="md:w-1/2 space-y-4">
        <h2 className="text-orange-700">About Us</h2>
        <h3 className="text-4xl">We are qualified & of experience in this field</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
