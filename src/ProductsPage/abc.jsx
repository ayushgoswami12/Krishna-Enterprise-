import Navbar from "../HomePage/Navbar";
import ContactCopy from "../HomePage/ContactCopy";
import FlexibleshaftGrinderImg from "./productsImg/FLEXIBLE SHAFT GRINDERS(WITHOUT SHAFT).jpg";
import { useEffect } from "react";

function FlexibleshaftGrinder() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableData = [
        { model: "KFG-01", hp: "1", kw: "0.75", phase: "3 & 1", shaft: "2 Mts." },
        { model: "KFG-02", hp: "1.5", kw: "1.10", phase: "3 & 1", shaft: "2 Mts." },
        { model: "KFG-03", hp: "2", kw: "1.50", phase: "3 & 1", shaft: "3 Mts." },
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
                        <th className="py-2 px-4 border-b text-left">Shaft Length</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"} hover:bg-gray-200`}>
                            <td className="py-2 px-4 border-b text-gray-800">{row.model}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.hp}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.kw}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.phase}</td>
                            <td className="py-2 px-4 border-b text-gray-800">{row.shaft}</td>
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
                        src={FlexibleshaftGrinderImg}
                        className="w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 lg:ml-32 border-2"
                        alt="Flexible Shaft Grinders Without Shaft"
                    />
                </div>

                <div className="lg:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                    FLEXIBLE SHAFT GRINDERS (WITHOUT SHAFT)
                    </h2>
                    {renderTable(tableData)}
                </div>
            </div>
            <ContactCopy />
        </div>
    );
}

export default FlexibleshaftGrinder;
