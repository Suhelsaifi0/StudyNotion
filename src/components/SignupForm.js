import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-[360px] mx-auto mt-6 flex flex-col gap-4 px-2"
    >
      {/* First Name */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={changeHandler}
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm outline-none"
        required
      />

      {/* Last Name */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={changeHandler}
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm outline-none"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={changeHandler}
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm outline-none"
        required
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={changeHandler}
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm outline-none"
        required
      />

      {/* Confirm Password */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={changeHandler}
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm outline-none"
        required
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full mt-2 py-3 bg-yellow-50 text-richblack-900 rounded-md font-semibold active:scale-95 transition"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
