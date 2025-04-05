// dependencies
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    loginPassword: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = formData.email.trim();
    const Password = formData.loginPassword.trim();

    console.log(email, Password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (

    <>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={onChange}
            value={formData.email}
            placeholder="Enter Your Email"
            autoComplete="off"
            name="email"
            required
            className="text-base placeholder:text-sm"
          />
        </div>
        <div className="">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            value={formData.loginPassword}
            onChange={onChange}
            name="loginPassword"
            placeholder="*********"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-1.5">
            <input type="checkbox" name="remember-me" id="remember-me" className="select-none cursor-pointer" />
            <label htmlFor="remember-me" className="block !text-gray-500 !text-sm font-medium text-nowrap !mb-0 select-none cursor-pointer">Remember me.</label>
          </div>
          <a href="/" className="text-primary text-sm font-semibold">Forgot Password</a>
        </div>

        <button type="submit" className="bg-primary font-semibold w-full p-5 py-2 rounded-lg text-gray-50 cursor-pointer">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
