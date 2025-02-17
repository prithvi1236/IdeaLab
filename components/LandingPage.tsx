import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Users, Book, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const LandingPage = () => {
  const [currentForm, setCurrentForm] = useState("details") // "details" or "queries"

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://idealab.mec.ac.in/static/media/idealab.7524a97ccb12597d4ef1.png"
                alt="IdeaLab Logo"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.ul
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-6"
            >
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 font-semibold">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 font-semibold">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 font-semibold"
                >
                  Book Facility
                </Link>
              </li>
            </motion.ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Cognicor AICTE IDEALab</h1>
          <p className="text-xl text-gray-600 mb-8">Where Ideas Become Reality</p>
          <Link
            href="#"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Explore Our Programs <ArrowRight className="inline-block ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Users className="text-purple-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Collaborative Learning</h2>
            <p className="text-gray-600">
              Engage in interactive workshops and training programs that foster creativity and collaboration.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Book className="text-purple-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Multidisciplinary Education</h2>
            <p className="text-gray-600">Explore the applications of STEM in a multidisciplinary environment.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Globe className="text-purple-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Socioeconomic Impact</h2>
            <p className="text-gray-600">
              Develop commercially viable products that meet real-world socioeconomic needs.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-600">About Cognicor AICTE IDEALab</h2>
          <p className="text-gray-600 mb-4">
            AICTE in collaboration with COGNICOR established MEC IDEALab in 2022. It offers interactive learning
            workshops and training programmes with the goal of fostering creativity and promoting interest in
            applications of STEM, multidisciplinary education, and collaboration.
          </p>
          <p className="text-gray-600 mb-4">
            It will enable faculty and students alike to "Engage, Explore, Experience, Express and Excel" by providing
            all the facilities required to turn an idea into a prototype and learn technical craft.
          </p>
          <p className="text-gray-600">
            It stands to assist in the development of commercially viable products, meet socioeconomic needs, and
            encourage entrepreneurship in the nearby student community.
          </p>
        </motion.div>
        {/* Forms Section */}
        <div className="mb-16">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setCurrentForm("details")}
              className={`px-4 py-2 rounded-full font-semibold ${
                currentForm === "details" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Have an idea ?
            </button>
            <button
              onClick={() => setCurrentForm("queries")}
              className={`px-4 py-2 rounded-full font-semibold ${
                currentForm === "queries" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              Need help ?
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <AnimatePresence>
              {currentForm === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Title</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Description</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter description"
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Contact Number</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter your contact number"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </motion.div>
              )}
              {currentForm === "queries" && (
                <motion.div
                  key="queries"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Query</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter your query"
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-600 font-semibold mb-2">Contact Number</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter your contact number"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Existing Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Image
            src="https://idealab.mec.ac.in/static/media/logo.f7c5d47095273c6999eb.png"
            alt="Govt Model Engineering College Logo"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Govt Model Engineering College</h3>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Cognicor AICTE IDEALab at Govt Model Engineering College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage