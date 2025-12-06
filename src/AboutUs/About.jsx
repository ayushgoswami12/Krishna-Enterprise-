import React from 'react';
import AboutUs from "./output.jpg";
import Journey from "./journey.jpg"
import Navbar from "../HomePage/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-6 lg:p-8 flex justify-center lg:justify-start">
            <img
              src={AboutUs}
              className="w-full lg:w-3/4 xl:w-2/3 rounded-lg shadow-lg object-cover"
              alt="About Us"
            />
          </div>
          <div className="lg:w-1/2 p-6 lg:p-8 max-w-xl">
            <p className="text-red-600 text-3xl sm:text-4xl font-bold mb-4">
              ABOUT US →
            </p>
            <p className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 pt-10">
              About Us
            </p>
            <p className="text-lg text-gray-800 font-[400] leading-relaxed mb-8">
              Krishna Enterprise is a leading manufacturer of Electric Motors, Buff Polishers, Belt Grinders, and Bench Grinders. Established in 1996, Krishna Enterprise has consistently delivered high-quality products and services to our valued customers.
            </p>
            <p className="text-lg text-gray-800 font-[400] leading-relaxed mb-8">
              We aim to deliver high-quality, durable, and reliable products, ensuring exceptional value to our customers through competitive pricing and superior customer service.
            </p>
            <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-md inline-block">
              <p className="text-2xl font-bold">30</p>
              <p className="text-lg">YEARS OF EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-6 lg:p-8 max-w-xl">
            <p className="text-red-700 text-2xl sm:text-2xl font-bold mb-4">
              Journey and Vision →
            </p>
            <p className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
              Our Journey
            </p>
            <p className="text-lg text-gray-800 font-[400] leading-relaxed mb-8">
              Founded in <span className='text-red-700'>1996</span> in Rajkot, Gujarat, Krishna Enterprise began as a small-scale manufacturing unit and has grown into a key industry player. Our success is founded on innovation, quality, and customer satisfaction, with our state-of-the-art facility and skilled workforce being the backbone of our achievements.
            </p>
            <p className="text-lg text-gray-800 font-[400] leading-relaxed mb-8">
              <span className='text-red-700'>Our vision</span> is to become a global leader in manufacturing by continuously improving our products, enhancing our processes, and expanding our presence in new markets.
            </p>
          </div>
          <div className="lg:w-1/2 p-6 lg:p-8 flex justify-center lg:justify-end">
            <img
              src={Journey}
              className="w-full lg:w-3/4 xl:w-2/3 rounded-lg shadow-lg object-cover"
              alt="Our Journey"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
