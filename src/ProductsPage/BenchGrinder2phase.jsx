import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import BenchGrinder2phaseImg from "./productsImg/Bench Grinders 2 phase .jpg";

function BenchGrinder2phase() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const tableData = [
        { model: "KGF-01", hp: "2", kw: "1.5", phase: "2", rpm: "2800", wheelSize: "12”X1.5”&2”", remarks: "Heavy" },
        { model: "KGF-02", hp: "3", kw: "2.2", phase: "2", rpm: "2800", wheelSize: "12”X1.5”&2”", remarks: "Light" },
        { model: "KGF-03", hp: "3", kw: "2.2", phase: "2", rpm: "2800", wheelSize: "12”X1.5”&2”", remarks: "Heavy" },
        { model: "KGF-04", hp: "5", kw: "3.7", phase: "2", rpm: "2800", wheelSize: "12”X1.5”&2”", remarks: "Heavy" },
        { model: "KGF-05", hp: "7.5", kw: "5.5", phase: "2", rpm: "2800", wheelSize: "12”X1.5”&2”", remarks: "Heavy" },
    ];

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
    };

    const renderTable = (data) => (
        <div className="overflow-x-auto lg:overflow-x-hidden">
            <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="py-2 px-4 border-b text-left">Model No.</th>
                        <th className="py-2 px-4 border-b text-left">H.P.</th>
                        <th className="py-2 px-4 border-b text-left">K.W.</th>
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
                            <td className="py-2 px-4 border-b text-gray-800">{row.wheelSize}</td>
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
                        src={BenchGrinder2phaseImg}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2 object-contain max-h-[50vh]"
                        alt="Bench Grinder 2 phase"
                        onClick={() => handleImageClick(1)}
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        BENCH GRINDERS (FOUR BEARINGS) TWO PHASE
                    </h2>
                    {renderTable(tableData)}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default BenchGrinder2phase;
