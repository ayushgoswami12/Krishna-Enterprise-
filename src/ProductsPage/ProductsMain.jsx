import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Navbar from "../HomePage/Navbar";
import benchgrinders4bearings from "./productsImg/BENCH GRINDERS (FOUR BEARINGS) THREE PHASE.jpg";
import doublesidegrinder from "./productsImg/DOUBLESIDE ABRASIVE BELT GRINDER THREE PHASE.jpg";
import eclassthreee from "./productsImg/E (class) Three Phase , 415 V, 50 Hz, Induction Motors.jpg";
import aclassthree from "./productsImg/A (CLASS) Three Phase.jpg";
import polishercum from "./productsImg/POLISHER CUM ABRASIVE BELT MACHINE.jpg";
import beltsandermachine from "./productsImg/BELT SANDER MACHINE.jpg";
import FlangeMounting from './productsImg/Three Phase , 415 V, 50 Hz, Flange MountingInduction Motors.jpg'
import PipeGrinder2 from "./productsImg/Bench Grinders 2 phase .jpg"
import PipeGrinder4 from "./productsImg/PIPE GRINDERS (FOUR BEARINGS) THREE & SINGLE PHASE.jpg";
import PolishertwobearingsImg from "./productsImg/POLISHERS(TWO BEARINGS) THREE & SINGLE PHASE.jpg";
import PolisherfourbearingsImg from "./productsImg/POLISHERS(FOUR BEARINGS) THREE PHASE.jpg";
import BenchGrinder2BearingSingleImg from "./productsImg/BENCH GRINDER TWO BEARING SINGLE.jpg"
import GrindercumPolisher2Bearings from './productsImg/GRINDERS CUM POLISHERS (TWO BEARINGS).jpg';
import FlexibleshaftGrinder from './productsImg/FLEXIBLE SHAFT GRINDERS(WITHOUT SHAFT).jpg';
import HeavyDoubleSide from './productsImg/HEAVY DOUBLE SIDE ABRASIVE BELT GRINDER.jpg';





function ProductsMain() {
  const products = [
    { id: 1, name: 'Bench Grinder (Four Bearings) ', image: benchgrinders4bearings },
    { id: 2, name: 'DOUBLESIDE ABRASIVE BELT GRINDER ', image: doublesidegrinder },
    { id: 3, name: 'E (Class) Three Phase Induction Motor', image: eclassthreee },
    { id: 4, name: 'A (Class) Three Phase Induction Motor ', image: aclassthree },
    { id: 5, name: 'Polisher Cum Abrasive Belt Machine', image: polishercum },
    { id: 6, name: 'Belt Sander Machine', image: beltsandermachine },
    { id: 7, name: 'Flange Mounting', image: FlangeMounting },
    { id: 13, name: 'BENCH GRINDER TWO BEARING THREE ', image: BenchGrinder2BearingSingleImg },
    { id: 8, name: 'BENCH GRINDERS (FOUR BEARINGS) THREE PHASE ', image: PipeGrinder2 },
    { id: 9, name: 'PIPE GRINDERS (FOUR BEARINGS) THREE PHASE ', image: PipeGrinder4 },
    { id: 10, name: 'POLISHERS(TWO BEARINGS) THREE & SINGLE PHASE ', image: PolishertwobearingsImg },
    { id: 11, name: 'POLISHERS(FOUR BEARINGS) THREE PHASE ', image: PolisherfourbearingsImg },
    { id: 12, name: 'BENCH GRINDER TWO BEARING SINGLE ', image: BenchGrinder2BearingSingleImg },
    { id: 14, name: 'GRINDERS CUM POLISHERS (TWO BEARINGS) ', image: GrindercumPolisher2Bearings },
    { id: 15, name: 'FLEXIBLE SHAFT GRINDERS(WITHOUT SHAFT) ', image: FlexibleshaftGrinder },
    { id: 16, name: 'FLEXIBLE SHAFT GRINDERS(WITHOUT SHAFT) ', image: HeavyDoubleSide },
  ];

  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <Navbar />
        <p className="mainHeading underline highlight text-center sm:text-5xl mt-3">
          Products Page 
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="border-2 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div
              className={`w-full flex items-center justify-center overflow-hidden ${
                product.id === 1 || product.id === 5 ? 'h-[400px]' : 'h-[300px]'
              }`}
              onClick={() => handleImageClick(product.id)}
            >
              <img
                className={`max-h-full max-w-full object-contain transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer ${
                  product.id === 3 || product.id === 4 ? 'h-auto w-auto' : ''
                }`}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className={`mt-2 text-center ${product.id === 3 || product.id === 4 ? 'pt-10' : ''}`}>
              <h2 className="text-lg font-bold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsMain;
