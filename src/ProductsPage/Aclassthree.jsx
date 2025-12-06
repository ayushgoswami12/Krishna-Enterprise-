import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import AclassthreeImg from "./productsImg/A (CLASS) Three Phase.jpg";

function Aclassthree() {
  const tableData1 = [
    { model: "KM-01", hp: "0.5", kw: "0.37", phase: "3", framesize: "71 M", shaftdia: "16 mm", rpm: "1440" },
    { model: "KM-02", hp: "1", kw: "0.75", phase: "3", framesize: "80 L", shaftdia: "19 mm", rpm: "1440" },
    { model: "KM-03", hp: "2", kw: "1.5", phase: "3", framesize: "90 L", shaftdia: "24 mm", rpm: "1440" },
    { model: "KM-04", hp: "3", kw: "2.2", phase: "3", framesize: "100 L", shaftdia: "28 mm", rpm: "1440" },
    { model: "KM-05", hp: "5", kw: "3.7", phase: "3", framesize: "112 L", shaftdia: "28 mm", rpm: "1440" },
    { model: "KM-06", hp: "7.5", kw: "5.5", phase: "3", framesize: "132 M", shaftdia: "38 mm", rpm: "1440" },
    { model: "KM-07", hp: "10", kw: "7.5", phase: "3", framesize: "132 L", shaftdia: "38 mm", rpm: "1440" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const renderTable = (data) => (
    <motion.div
      className="my-6 overflow-x-auto lg:overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="py-2 px-4 border-b text-left">Model No.</th>
            <th className="py-2 px-4 border-b text-left">H.P.</th>
            <th className="py-2 px-4 border-b text-left">K.W.</th>
            <th className="py-2 px-4 border-b text-left">Phase</th>
            <th className="py-2 px-4 border-b text-left">Frame Size</th>
            <th className="py-2 px-4 border-b text-left">Shaft Dia</th>
            <th className="py-2 px-4 border-b text-left">R.P.M.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-200`}>
              <td className="py-2 px-4 border-b text-gray-800">{row.model}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.hp}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.kw}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.phase}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.framesize}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.shaftdia}</td>
              <td className="py-2 px-4 border-b text-gray-800">{row.rpm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  return (
    <div>
      <Navbar />
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-6 bg-gray-50">
        <motion.div
          className="lg:w-[35vw] w-full flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={AclassthreeImg}
            className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
            alt="A (CLASS) Three Phase"
          />
        </motion.div>

        <div className="lg:w-1/2 w-full">
          <motion.h2
            className="text-4xl font-bold my-4 py-5 text-center lg:text-left text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            A (CLASS) Three Phase
          </motion.h2>

          {renderTable(tableData1)}
        </div>
      </div>
      <ContactCopy />
    </div>
  );
}

export default Aclassthree;
