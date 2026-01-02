import {FaChalkboardTeacher, FaLaptopCode, FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-richblack-900 text-white px-4 py-10">
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col gap-14">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="text-blue-100">StudyNotion</span>
          </h1>
          <p className="text-richblack-300 mt-4">
            StudyNotion is a modern learning platform designed to empower students
            with industry-relevant skills through high-quality courses and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-richblack-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">🎯 Our Mission</h2>
            <p className="text-richblack-300">
              To make quality education accessible, affordable, and practical for everyone,
              helping learners grow confidently in their careers.
            </p>
          </div>

          <div className="bg-richblack-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">🚀 Our Vision</h2>
            <p className="text-richblack-300">
              To become a global learning ecosystem where students, instructors, and
              organizations collaborate to build the future.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Choose <span className="text-blue-100">StudyNotion</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-richblack-800 rounded-xl p-6 text-center hover:scale-95 transition">
              <FaLaptopCode className="text-4xl text-yellow-50 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Practical Learning</h3>
              <p className="text-richblack-300">
                Hands-on projects and real-world examples to strengthen concepts.
              </p>
            </div>

            <div className="bg-richblack-800 rounded-xl p-6 text-center hover:scale-95 transition">
              <FaChalkboardTeacher className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Mentors</h3>
              <p className="text-richblack-300">
                Learn from experienced instructors and industry professionals.
              </p>
            </div>

            <div className="bg-richblack-800 rounded-xl p-6 text-center hover:scale-95 transition">
              <FaUserFriends className="text-4xl text-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community Support</h3>
              <p className="text-richblack-300">
                Grow together with a supportive and collaborative learner community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
