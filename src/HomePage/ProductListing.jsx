import React from "react";
import benchgrinders4bearings from "../ProductsPage/productsImg/BENCH GRINDERS (FOUR BEARINGS) THREE PHASE.jpg";
import doublesidegrinder from "../ProductsPage/productsImg/DOUBLESIDE ABRASIVE BELT GRINDER THREE PHASE.jpg";
import eclassthreee from "../ProductsPage/productsImg/E (class) Three Phase , 415 V, 50 Hz, Induction Motors.jpg";
import polishercum from "../ProductsPage/productsImg/POLISHER CUM ABRASIVE BELT MACHINE.jpg";
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <>

      <div className="flex flex-col items-center py-10 bg-white px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          Our <span className="font-bold">PRODUCTS</span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2  w-full max-w-screen-lg">
          <div className="border-2   flex flex-col items-center justify-center p-4">
            <img className="w-full h-[40vh] sm:h-[35vh] md:h-[40vh] lg:h-[55vh] object-contain" src={benchgrinders4bearings} alt="BENCH GRINDERS (FOUR BEARINGS) THREE PHASE" />
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base lg:text-lg">BENCH GRINDERS </p>
          </div>
          <div className="border-2  flex flex-col items-center justify-center p-4">
            <img className="w-full h-[40vh] sm:h-[35vh] md:h-[40vh] lg:h-[55vh] object-contain" src={doublesidegrinder} alt="DOUBLESIDE ABRASIVE BELT GRINDER THREE PHASE" />
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base lg:text-lg">DOUBLESIDE ABRASIVE BELT GRINDER </p>
          </div>
          <div className="border-2  flex flex-col items-center justify-center p-4">
            <img className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[30vh] object-contain" src={eclassthreee} alt="E (class) Three Phase, 415 V, 50 Hz, Induction Motors" />
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base lg:text-lg"> Induction Motors</p>
          </div>
          <div className="border-2  flex flex-col items-center justify-center p-4">
            <img className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] object-contain" src={polishercum} alt="POLISHER CUM ABRASIVE BELT MACHINE" />
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base lg:text-lg">POLISHER CUM ABRASIVE BELT MACHINE</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
  <Link to="/Products">
    <button className="hover:bg-teal-400 font-bold bg-blue-400 p-3 mb-10  mt-0 rounded-lg text-center transition duration-300 ease-in-out">
      Check out ALL PRODUCTS
    </button>
  </Link>
</div>


    </>
  );
}

export default ProductListing;
