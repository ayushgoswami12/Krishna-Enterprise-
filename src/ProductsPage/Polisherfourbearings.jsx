import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import PolisherfourbearingsImg from "./productsImg/POLISHERS(FOUR BEARINGS) THREE PHASE.jpg";
import { useEffect } from "react";

function Polisherfourbearings() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableData = [
        { model: "KP-01", hp: "2", kw: "1.50", phase: "3", rpm: "2800", remarks: "Light" },
        { model: "KP-02", hp: "2", kw: "1.50", phase: "3", rpm: "2800", remarks: "Heavy" },
        { model: "KP-03", hp: "3", kw: "2.20", phase: "3", rpm: "2800", remarks: "Heavy" },
        { model: "KP-04", hp: "5", kw: "3.70", phase: "3", rpm: "2800", remarks: "Heavy" },
        { model: "KP-05", hp: "7.5", kw: "5.50", phase: "3", rpm: "2800", remarks: "Heavy" },
    ];

    const renderTable = (data) => (
        <div className="overflow-x-auto lg:overflow-x-hidden">
            <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="py-2 px-4 border-b text-left">Model No.</th>
                        <th className="py-2 px-4 border-b text-left">Horse Power (HP)</th>
                        <th className="py-2 px-4 border-b text-left">KW</th>
                        <th className="py-2 px-4 border-b text-left">Phase</th>
                        <th className="py-2 px-4 border-b text-left">RPM</th>
                        <th className="py-2 px-4 border-b text-left">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-200`}>
                            <td className="py-2 px-4 border-b text-gray-800">{row.model}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.hp}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.kw}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.phase}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.rpm}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.remarks}</td>
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
                <div className="lg:w-[35vw] w-full flex justify-center lg:justify-start">
                    <img
                        src={PolisherfourbearingsImg}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
                        alt="Polisher Four Bearings" // More descriptive alt text
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        POLISHERS (FOUR BEARINGS) THREE PHASE  {/* Corrected title */}
                    </h2>
                    {renderTable(tableData)}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default Polisherfourbearings;
