import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
  return (
    <section className="w-full min-h-screen bg-richblack-900 text-white flex items-center px-4">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 py-10">

        <div className="flex flex-col gap-6 text-center lg:text-left flex-1">
          <span className="text-yellow-50 font-semibold tracking-wide text-sm sm:text-base">
            🚀 Learn Smarter. Grow Faster.
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Empower Your Future with
            <span className="text-blue-100"> StudyNotion</span>
          </h1>

          <p className="text-richblack-300 max-w-[520px] mx-auto lg:mx-0 text-sm sm:text-base">
            Learn coding, development, and modern tech skills from industry experts.
            Build projects, gain confidence, and get placement-ready.
          </p>

          {!isLoggedIn && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/login" className="w-full sm:w-auto">
                <button className="w-full bg-yellow-50 text-richblack-900 px-6 py-3 rounded-lg font-semibold hover:scale-95 transition-all">
                  Get Started
                </button>
              </Link>

              <Link to="/login" className="w-full sm:w-auto">
                <button className="w-full border border-richblack-600 px-6 py-3 rounded-lg hover:bg-richblack-800 transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div className="flex justify-center lg:justify-start">
              <Link to="/dashboard">
                <button className="bg-yellow-50 text-richblack-900 px-6 py-3 rounded-lg font-semibold hover:scale-95 transition-all">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
            📚 
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
