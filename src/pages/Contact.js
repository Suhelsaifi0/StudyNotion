import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-richblack-900 text-white px-4 py-10">
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col gap-14">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact <span className="text-blue-100">Us</span>
          </h1>
          <p className="text-richblack-300 mt-4">
            Have questions or need help? We’re here to support your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="flex flex-col gap-6">
            <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4">
              <FaEnvelope className="text-yellow-50 text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-richblack-300">support@studynotion.com</p>
              </div>
            </div>

            <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-richblack-300">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-richblack-800 rounded-xl p-6 flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-400 text-2xl" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-richblack-300">
                  StudyNotion HQ,<br />
                  Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-richblack-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-richblack-700 rounded-md p-3 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-richblack-700 rounded-md p-3 text-white outline-none"
              />

              <textarea
                rows="2"
                placeholder="Your Message"
                className="bg-richblack-700 rounded-md p-3 text-white outline-none resize-none"
              ></textarea>

              <button className="bg-yellow-50 text-richblack-900 py-3 rounded-lg font-semibold hover:scale-95 transition">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
