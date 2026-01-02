import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="w-full min-h-screen bg-richblack-900 flex items-center justify-center px-4">
      
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT : FORM */}
        <div className="w-full max-w-[380px] text-white">
          <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>

          <p className="mt-3 text-sm sm:text-base">
            <span className="text-richblack-100">{desc1}</span>
            <br />
            <span className="text-blue-100 italic">{desc2}</span>
          </p>

          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          {/* OR */}
          <div className="flex items-center my-6 gap-2">
            <div className="flex-1 h-px bg-richblack-700"></div>
            <p className="text-xs text-richblack-400">OR</p>
            <div className="flex-1 h-px bg-richblack-700"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-richblack-700 rounded-lg text-sm">
            <FcGoogle size={20} />
            Continue with Google
          </button>
        </div>

        {/* RIGHT : IMAGE (Desktop only) */}
        <div className="hidden lg:flex relative w-full max-w-[450px] justify-center">
          <img src={frameImage} className="w-full max-w-[420px]" />
          <img
            src={image}
            className="absolute -top-4 right-4 w-full max-w-[420px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
