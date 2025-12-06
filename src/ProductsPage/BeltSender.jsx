import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import BeltSenderImg from "./productsImg/BELT SANDER MACHINE.jpg";

function BeltSender() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const tableData = [
    { description: "Sanding Belt Size", fourInch: "4x48", sixInch: "6x48" },
    { description: "Sanding Disc Dia.", fourInch: '8"', sixInch: '8"' },
    { description: "Tilting of Table (Degree)", fourInch: "45*", sixInch: "45*" },
    { description: "Ele. Motor (1440 RPM)", fourInch: "0.75", sixInch: "0.75" },
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-6 bg-gray-50">
        {/* Left Section - Image */}
        <div className="lg:w-[35vw] w-full flex justify-center lg:justify-start">
          <img
            src={BeltSenderImg}
            className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
            alt="Belt Sander Machine"
          />
        </div>

        {/* Right Section - Specifications */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center lg:text-left">
            BELT SANDER MACHINE
          </h2>
          <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-4 border-b text-left">Description</th>
                <th className="py-3 px-4 border-b text-left">4 Inch Model</th>
                <th className="py-3 px-4 border-b text-left">6 Inch Model</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-200`}>
                  <td className="py-2 px-4 border-b text-gray-800">{row.description}</td>
                  <td className="py-2 px-4 border-b text-gray-800">{row.fourInch}</td>
                  <td className="py-2 px-4 border-b text-gray-800">{row.sixInch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ContactCopy />
    </div>
  );
}

export default BeltSender;
