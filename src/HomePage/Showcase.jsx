import "./Showcase.css";
import Arrow from "./Arrow.svg";
// import Image3 from "../SiteImages/Industrial-Photoshoot.jpg";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';



function Showcase() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section comes into view
    threshold: 0.5, // Trigger when 50% of the section is visible
  });
  return (
    <>
      {/* <div className="buy m-5">
        <p>BUY GOOD</p>
        <p>BE GOOD</p>
      </div>
      <div className="flex items-center pl-5 w-full overflow-x-hidden">
        <div className="flex justify-around h-[40vw] w-[31vw] gap-5">
          <img
            className="object-cover"
            src="https://images.pexels.com/photos/3421636/pexels-photo-3421636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="object-cover"
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="object-cover"
            src={Image3}
          />
        </div>
      </div> */}


      <div className="mt-10 md:mt-40 lg:mt-52 mx-5 md:mx-10 lg:mx-20 px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              className="w-[90vw] md:w-[40vw] rounded-md"
              src="https://images.pexels.com/photos/3846390/pexels-photo-3846390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-[100%] md:w-[50vw] flex flex-col">
            <h1 className="text-xl font-bold pb-2 text-gray-600 tracking-widest">THIS IS </h1>
            <h1 className="text-3xl md:text-5xl font-bold pb-2 text-teal-600">
              "Krishna <span className="text-teal-600">Enterprise ."</span>
            </h1>
            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              <span className="text-teal-600">Krishna </span>
              <span className="text-black"> Enterprise</span> is a metal casting
              company manufacturing the best quality Metal Casting Products. The
              massive range of products includes High Manganese{" "}
              <span className="text-teal-600">Steel Casting, S.G.I. Casting, C.I. Casting</span>,
              etc.
            </p>

            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              The company was established in <span className="text-teal-600">1978</span> and has
              since been one of the renowned Cast Iron Castings Manufacturers
              in India. Based in Ahmedabad (Guj), India, the company operates
              with its reputed brand.
            </p>
            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              Mr. Bashir M. Nagori, the revered CEO, has encouraged us to reach
              great success. Following are the qualities distinguishing us in
              the market.
            </p>
            <div className="flex flex-col md:flex-row gap-10 pt-5">
              <div className="flex items-center gap-3">
                <img className="w-[10vw] md:w-[5vw]" src={Arrow}></img>
                <h1 className="text-2xl md:text-4xl w-[40vw] md:w-[20vw] text-gray-500 font-bold">
                  <span className="text-black block">100% Client</span>
                  Satisfaction
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-[10vw] md:w-[5vw]" src={Arrow}></img>
                <h1 className="text-2xl md:text-4xl w-[40vw] md:w-[20vw] text-gray-500 font-bold">
                  <span className="text-black block">Cutting Edge</span>
                  Technology
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section ref={ref} className="bg-blue-500 py-8 mt-10 mx-5 text-white mb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="text-gray-900 text-4xl md:text-6xl font-bold">
              {inView && <CountUp end={3000} duration={3} />}+
            </div>
            <p className="text-sm md:text-lg font-medium">Projects Completed</p>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="text-gray-900 text-4xl md:text-6xl font-bold">
              {inView && <CountUp end={50} duration={3} />}+
            </div>
            <p className="text-sm md:text-lg font-medium">Expert Workers</p>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="text-gray-900 text-4xl md:text-6xl font-bold">
              {inView && <CountUp end={20} duration={3} />}+
            </div>
            <p className="text-sm md:text-lg font-medium">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            <div className="text-gray-900 text-4xl md:text-6xl font-bold">
              {inView && <CountUp end={60000} duration={3} />}+
            </div>
            <p className="text-sm md:text-lg font-medium">Happy Clients</p>
          </div>

        </div>
      </section>
        

    </>
  );
}

export default Showcase;