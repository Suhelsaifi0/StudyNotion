import { FaBookOpen, FaUserGraduate, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-richblack-900 text-white px-4 py-8">
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col gap-10">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome to <span className="text-blue-100">StudyNotion</span>
          </h1>
          <p className="text-richblack-300 mt-2">
            Track your learning progress and explore your dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4 hover:scale-95 transition">
            <FaBookOpen className="text-yellow-50 text-3xl" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-richblack-300">Enrolled Courses</p>
            </div>
          </div>

          <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4 hover:scale-95 transition">
            <FaUserGraduate className="text-green-400 text-3xl" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-richblack-300">Completed Courses</p>
            </div>
          </div>

          <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4 hover:scale-95 transition">
            <FaChartLine className="text-pink-400 text-3xl" />
            <div>
              <p className="text-2xl font-bold">72%</p>
              <p className="text-richblack-300">Learning Progress</p>
            </div>
          </div>
        </div>

        <div className="bg-richblack-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-richblack-300">
            <li>✅ Completed React Basics Module</li>
            <li>📘 Started Node.js Fundamentals</li>
            <li>⭐ Added JavaScript course to wishlist</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
