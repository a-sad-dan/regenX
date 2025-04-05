// dependencies
import React from "react";
import bannerImage from "/Banner.png";

// components
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage: React.FC = () => {
  return (
    <>
      {/* Layout Starts from here */}
      <div className="flex items-stretch justify-between">
        {/* Login Form Starts from here */}
        <div className="flex flex-col items-center justify-between h-svh w-1/2">
        
          <Header />

          <div className="items-center flex-col space-y-5 md:min-w-96">
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold">Log In</h2>
              <p className="text-gray-500 font-light">Welcome back to RegenX</p>
            </div>
            <LoginForm />
            <p className="text-gray-400p pt-2 font-light text-sm text-center">Don’t have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold">Sign up</Link></p>
          </div>

          <Footer />

        </ div>
        <div className="hidden md:block h-svh p-0 m-0 overflow-hidden w-1/2">
          < img src={bannerImage} alt="RgenX Banner" className="w-full min-h-svh" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
