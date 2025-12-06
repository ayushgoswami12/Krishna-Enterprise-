import React, { useEffect } from "react";
import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import PolisherImg from "./productsImg/POLISHER CUM ABRASIVE BELT MACHINE.jpg";

function PolisherCum() {
    const tableData = [
        { model: "KPB-01", hp: "2", kw: "1.50", phase: "3", rpm: "2800", wheelSize: "250x50x25", beltSize: "50x2000" },
        { model: "KPB-02", hp: "3", kw: "2.20", phase: "3", rpm: "2800", wheelSize: "250x50x25", beltSize: "50x2000" },
        { model: "KPB-03", hp: "5", kw: "3.70", phase: "3", rpm: "2800", wheelSize: "250x50x25", beltSize: "50x2000" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderTable = (data) => (
        <div className="overflow-x-auto lg:overflow-x-hidden">
            <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="py-2 px-4 border-b text-left">Model No.</th>
                        <th className="py-2 px-4 border-b text-left">H.P.</th>
                        <th className="py-2 px-4 border-b text-left">K.W.</th>
                        <th className="py-2 px-4 border-b text-left">Phase</th>
                        <th className="py-2 px-4 border-b text-left">R.P.M.</th>
                        <th className="py-2 px-4 border-b text-left">Dia. Width Bore Rubber Wheel Size (mm)</th>
                        <th className="py-2 px-4 border-b text-left">Belt Size (mm)</th>
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
                            <td className="py-2 px-4 border-b text-gray-800">{row.beltSize}</td>
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
                        src={PolisherImg}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
                        alt="Polisher Cum Abrasive Belt Machine"
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        Polisher Cum Abrasive Belt Machine
                    </h2>
                    {renderTable(tableData)} {/* Render the table */}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default PolisherCum;
