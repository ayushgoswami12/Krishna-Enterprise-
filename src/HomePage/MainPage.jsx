import React from 'react';
import { Helmet } from 'react-helmet';
import MainImg1 from "./1000035617.jpg";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Welcome to Krishna Enterprise | Electric Motors, Buff Polishers, Belt Grinders & Bench Grinders</title>
        <meta name="description" content="Welcome to Krishna Enterprise, the leading manufacturer of Electric Motors, Buff Polishers, Belt Grinders & Bench Grinders under the Brand FastMake in Rajkot." />
        <meta name="keywords" content="Krishna Enterprise, Welcome to Krishna Enterprise, Rajkot, Belt Grinders, Bench Grinders" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Krishna Enterprise",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[Your Street Address]",
                "addressLocality": "Rajkot",
                "addressRegion": "GJ",
                "postalCode": "[Your Postal Code]",
                "addressCountry": "IN"
              },
              "telephone": "[Your Phone Number]"
            }
          `}
        </script>
      </Helmet>
      {/* Main Heading */}
      <div className="mainHeading text-4xl sm:text-5xl md:text-6xl font-bold my-5 text-center px-4">
        Welcome to <span className="highlight">"Krishna Enterprise."</span>
      </div>

      {/* Content Section */}
      <div className="flex md:mt-32 mt-10 flex-col md:flex-row justify-around items-center px-4">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <div className="promo text-gray-900">We are</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Passionate.
            <br />
            <span className="text-[#0f9898]">Innovative.</span>
            <br />
            <span>Authentic.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 font-bold text-blue-400">
            Welcome to Krishna Enterprise, the leading manufacturer of Electric Motors, Buff Polishers, Belt Grinders & Bench Grinders under the Brand FastMake.
          </p>
          <Link to="/Products">
            <button className="bg-[#0f9898] text-white py-2 px-6 rounded hover:bg-teal-700 transition duration-300">
              Discover More
            </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-[30vw] p-4 text-center">
          <img
            src={MainImg1}
            alt="Electric Motor by Krishna Enterprise in Rajkot"
            className="mx-auto w-[80%] max-w-[300px] md:max-w-[600px]"
          />
        </div>
      </div>
    </>
  );
}

export default MainPage;
