import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-[360px] mx-auto mt-6 flex flex-col gap-4"
    >
      <input
        type="email"
        required
        placeholder="Email"
        className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm"
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          required
          placeholder="Password"
          className="w-full p-3 bg-richblack-800 rounded-md text-white text-sm"
        />

        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </span>
      </div>

      <button className="w-full py-3 bg-yellow-50 text-richblack-900 rounded-md font-semibold">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
