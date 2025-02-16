import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <motion.div
            className="relative w-16 h-16 mx-auto"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lightbulb className="w-16 h-16 text-yellow-300" />
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-white"
        >
          Ideas into Reality
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center items-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;

