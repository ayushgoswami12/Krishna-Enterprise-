import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import PipeGrinder4Img from "./productsImg/PIPE GRINDERS (FOUR BEARINGS) THREE & SINGLE PHASE.jpg";

function PipeGrinder4() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const tableData = [
        { model: "KPG-01", hp: "0.5", kw: "0.37", phase: "3", rpm: "2800", wheelSize: "6”X3/4”", remarks: "Heavy" },
        { model: "KPG-02", hp: "0.7", kw: "0.55", phase: "3", rpm: "2800", wheelSize: "8”X1”", remarks: "Heavy" },
        { model: "KPG-03", hp: "1", kw: "0.75", phase: "3", rpm: "2800", wheelSize: "10”X1”", remarks: "Heavy" },
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
                        src={PipeGrinder4Img}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2 object-contain max-h-[50vh]"
                        alt="Pipe Grinder Four Bearings"
                        onClick={() => handleImageClick(1)}
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        PIPE GRINDERS (FOUR BEARINGS) THREE & SINGLE PHASE
                    </h2>
                    {renderTable(tableData)}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default PipeGrinder4;
