import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();

    console.log(name, email, password);
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
        <div>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            onChange={onChange}
            value={formData.name}
            placeholder="Enter Your Name"
            autoComplete="off"
            name="name"
            required
            className="text-base placeholder:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            onChange={onChange}
            value={formData.email}
            placeholder="Enter Your Email"
            autoComplete="off"
            name="email"
            required
            className="text-base placeholder:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            onChange={onChange}
            value={formData.password}
            placeholder="Create a Password"
            autoComplete="off"
            name="password"
            required
          />
        </div>

        <button type="submit" className="bg-primary font-semibold w-full p-5 py-2 rounded-lg text-gray-50 cursor-pointer">
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignupForm;
