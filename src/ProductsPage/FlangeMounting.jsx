import { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import FlangeMountingImg from "./productsImg/Three Phase , 415 V, 50 Hz, Flange MountingInduction Motors.jpg";

function FlangeMounting() {
  const tableData1 = [
    { model: "KM-01", hp: "0.5", kw: "0.37", phase: "3", framesize: "71 M", shaftdia: "16 mm", rpm: "1440" },
    { model: "KM-02", hp: "1", kw: "0.75", phase: "3", framesize: "80 L", shaftdia: "19 mm", rpm: "1440" },
    { model: "KM-03", hp: "2", kw: "1.5", phase: "3", framesize: "90 L", shaftdia: "24 mm", rpm: "1440" },
    { model: "KM-04", hp: "3", kw: "2.2", phase: "3", framesize: "100 L", shaftdia: "28 mm", rpm: "1440" },
    { model: "KM-05", hp: "5", kw: "3.7", phase: "3", framesize: "112 L", shaftdia: "28 mm", rpm: "1440" },
    { model: "KM-06", hp: "7.5", kw: "5.5", phase: "3", framesize: "132 M", shaftdia: "38 mm", rpm: "1440" },
    { model: "KM-07", hp: "10", kw: "7.5", phase: "3", framesize: "132 L", shaftdia: "38 mm", rpm: "1440" },
  ];
  const tableData2 = [
    { model: "KM-01", hp: "0.5", kw: "0.37", phase: "3", framesize: "71 M", shaftdia: "16 mm", rpm: "2800" },
    { model: "KM-02", hp: "1", kw: "0.75", phase: "3", framesize: "80 M", shaftdia: "19 mm", rpm: "2800" },
    { model: "KM-03", hp: "2", kw: "1.5", phase: "3", framesize: "90 L", shaftdia: "24 mm", rpm: "2800" },
    { model: "KM-04", hp: "3", kw: "2.2", phase: "3", framesize: "100 L", shaftdia: "28 mm", rpm: "2800" },
    { model: "KM-05", hp: "5", kw: "3.7", phase: "3", framesize: "112 L", shaftdia: "28 mm", rpm: "2800" },
    { model: "KM-06", hp: "7.5", kw: "5.5", phase: "3", framesize: "132 M", shaftdia: "38 mm", rpm: "2800" },
    { model: "KM-07", hp: "10", kw: "7.5", phase: "3", framesize: "132 M", shaftdia: "38 mm", rpm: "2800" },
  ];

 

  const tableData3 = [
    { model: "KM-01", hp: "0.37", kw: "0.18", phase: "3", framesize: "80 M", shaftdia: "19 mm", rpm: "960" },
    { model: "KM-02", hp: "0.75", kw: "0.37", phase: "3", framesize: "90 M", shaftdia: "22 mm", rpm: "960" },
    { model: "KM-03", hp: "1.1", kw: "0.75", phase: "3", framesize: "100 M", shaftdia: "24 mm", rpm: "960" },
    { model: "KM-04", hp: "1.5", kw: "1.1", phase: "3", framesize: "100 L", shaftdia: "24 mm", rpm: "960" },
    { model: "KM-05", hp: "2.2", kw: "1.5", phase: "3", framesize: "112 L   ", shaftdia: "28 mm", rpm: "960" },
    { model: "KM-06", hp: "3.7", kw: "2.2", phase: "3", framesize: "132 M", shaftdia: "38 mm", rpm: "960" },
    { model: "KM-07", hp: "5.5", kw: "3.7", phase: "3", framesize: "132 L", shaftdia: "38 mm", rpm: "960" },
    { model: "KM-08", hp: "7.5", kw: "3.7", phase: "3", framesize: "160 M", shaftdia: "42 mm", rpm: "960" },
  ];

  const tableData4 = [
    { model: "KM-01", hp: "0.5", kw: "0.37", phase: "3", framesize: "90 M", shaftdia: "22 mm", rpm: "720" },
    { model: "KM-02", hp: "1", kw: "0.75", phase: "3", framesize: "100 M", shaftdia: "24 mm", rpm: "720" },
    { model: "KM-03", hp: "2", kw: "1.5", phase: "3", framesize: "112 L", shaftdia: "28 mm", rpm: "720" },
  ]

  useEffect(() => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const renderTable = (data) => (
    <div className="overflow-x-auto my-6">
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
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-200`}
            >
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
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-6 bg-gray-50">
        {/* Left Section - Image */}
        <div className="lg:w-[35vw] w-full flex justify-center lg:justify-start">
          <img
            src={FlangeMountingImg}
            className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
            alt="Flange Mounting Induction Motors"
          />
        </div>

        {/* Right Section - Specifications */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold my-4 py-5 text-center lg:text-left text-gray-800">
            A (CLASS) Three Phase , 415 V, 50 Hz, Flange Mounting Induction Motors
          </h2>

          {/* Table 1 */}
          {renderTable(tableData1)}

          {/* Table 2 */}
          {renderTable(tableData2)}

          {/* Table 3 */}
          {renderTable(tableData3)}

          {/* Table 4 */}
          {renderTable(tableData4)}
        </div>
      </div>
      <ContactCopy />
    </div>
  );
}

export default FlangeMounting;
