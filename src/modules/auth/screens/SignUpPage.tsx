// dependencies
import React from "react";
import bannerImage from "/Banner.png";

// components
import SignupForm from "../components/SignupForm";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignupPage: React.FC = () => {
  return (
    <>
      {/* Layout Starts from here */}
      <div className="flex items-stretch justify-between">
        {/* Sign Up Form Starts from here */}
        <div className="flex flex-col items-center justify-between h-svh w-1/2">

          <Header />

          <div className="items-center flex-col space-y-5 md:min-w-96">
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold">Sign Up</h2>
              <p className="text-gray-500 font-light">Create your account on RegenX</p>
            </div>
            <SignupForm />
            <p className="text-gray-400 pt-2 font-light text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold">Log in</Link>
            </p>
          </div>

          <Footer />

        </div>
        <div className="hidden md:block h-svh p-0 m-0 overflow-hidden w-1/2">
          <img src={bannerImage} alt="RegenX Banner" className="w-full min-h-svh" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
