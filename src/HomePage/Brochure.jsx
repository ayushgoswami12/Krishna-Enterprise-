import React from "react";
import { motion } from "framer-motion";

function BrochurePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 overflow-x-hidden">
      {/* Main container */}
      <div className="relative py-6 sm:max-w-xl sm:mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 sm:px-6">

        {/* Animated background gradient */}
        <motion.div
          initial={{ scale: 0.9, rotate: 0 }}
        //   animate={{ scale: 1, rotate: 6 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform skew-y-0 rotate-6 rounded-3xl max-w-4xl mx-auto"
          whileInView={{ scale: 1, rotate: 6 }}
        ></motion.div>
        
        {/* Animated brochure content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
        //   animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          className="relative px-4 py-8 sm:px-8 sm:py-12 md:px-10 md:py-14 bg-white shadow-lg rounded-3xl max-w-full"
        >
          <div className="max-w-md mx-auto">
            
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
            //   animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-semibold text-center sm:text-left text-black"
            >
              Download Our Brochure 
            </motion.h1>

            {/* Animated Introduction */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
            //   animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mt-4 text-gray-600 text-center sm:text-left text-sm sm:text-base"
            >
             Discover excellence and innovation with Krishna Enterprise. Download our detailed brochure to learn more about our offerings.
            </motion.p>

            {/* Animated Button with Google Drive link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-6 sm:mt-8 flex justify-center sm:justify-start"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#319795",
                }}
                transition={{ duration: 0.01 }}
                href="https://drive.google.com/file/d/1eGDbiu_0t8LZ_ulVDFoHzyuCp-Xa8s3a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 sm:px-8 sm:py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
              >
                Download Brochure
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="mt-52 mb-0 bg-gray-800 text-white py-6 ">
        <div className="text-center text-sm sm:text-base">
          <p>© 2025 Krishna Enterprise. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default BrochurePage;
