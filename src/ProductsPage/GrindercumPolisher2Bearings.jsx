import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import GrindercumPolisher2BearingsImg from "./productsImg/GRINDERS CUM POLISHERS (TWO BEARINGS).jpg";
import { useEffect } from "react";

function GrindercumPolisher2Bearings() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableData = [
        { model: "KBG-01", hp: "0.25", kw: "0.18", phase: "3 & 1", rpm: "2800", wheel: '4"X3/4"', remarks: "Heavy" },
        { model: "KBG-02", hp: "0.50", kw: "0.37", phase: "3 & 1", rpm: "2800", wheel: '6"X3/4"', remarks: "Heavy" },
        { model: "KBG-03", hp: "0.50", kw: "0.37", phase: "3 & 1", rpm: "2800", wheel: '8"X1"', remarks: "Heavy" },
        { model: "KBG-04", hp: "0.75", kw: "0.55", phase: "3 & 1", rpm: "2800", wheel: '8"X1"', remarks: "Heavy" },
        { model: "KBG-05", hp: "1", kw: "0.75", phase: "3 & 1", rpm: "2800", wheel: '10"X1"', remarks: "Heavy" },
        { model: "KBG-06", hp: "1.50", kw: "1.10", phase: "3 & 1", rpm: "2800", wheel: '10"X1"', remarks: "Heavy" },
        { model: "KBG-07", hp: "2", kw: "1.50", phase: "3", rpm: "2800", wheel: '10"X1"', remarks: "Light" },
        { model: "KBG-08", hp: "2", kw: "1.50", phase: "3", rpm: "2800", wheel: '12"X1.5"', remarks: "Heavy" },
        { model: "KBG-09", hp: "3", kw: "2.20", phase: "3", rpm: "2800", wheel: '12"X1.5"', remarks: "Heavy" },
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
                        <th className="py-2 px-4 border-b text-left">Wheel Size</th>
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
                            <td className="py-2 px-4 border-b text-gray-800">{row.wheel}</td>
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
                        src={GrindercumPolisher2BearingsImg}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
                        alt="Bench Grinder Two Bearing Three Phase"
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                    GRINDERS CUM POLISHERS (TWO BEARINGS)
                    </h2>
                    {renderTable(tableData)}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default GrindercumPolisher2Bearings;
