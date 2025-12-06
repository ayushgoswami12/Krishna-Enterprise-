import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Contact from "./ContactUs/Contact";
import BenchGrinder from "./ProductsPage/BenchGrinder";
import Eclasssthree from "./ProductsPage/Eclassthree";
import Aclasssthree from "./ProductsPage/Aclassthree";
import BeltSender from "./ProductsPage/BeltSender";
import PolisherCum from "./ProductsPage/PolisherCum";
import DoubleAbrasive from "./ProductsPage/DoubleAbrasive";
import ProductsMain from "./ProductsPage/ProductsMain";
import About from "./AboutUs/About";
import FlangeMounting from "./ProductsPage/FlangeMounting";
import PipeGrinder2 from "./ProductsPage/BenchGrinder2phase";
import PipeGrinder4 from "./ProductsPage/PipeGrinder4";
import Polishertwobearings from "./ProductsPage/Polishertwobearings";
import Polisherfourbearings from "./ProductsPage/Polisherfourbearings";
import BenchGrinder2BearingSingle from "./ProductsPage/BenchGrinder2BearingSingle";
import BenchGrinder2BearingThree from "./ProductsPage/BenchGrinder2BearingThree";
import GrindercumPolisher2Bearings from "./ProductsPage/GrindercumPolisher2Bearings";
import FlexibleshaftGrinder from "./ProductsPage/flexibleshaftGrinder";
import HeavyDoubleSide from "./ProductsPage/HeavyDoubleSide";

const routes = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/Products", element: <ProductsMain /> },
    { path: "/About", element: <About /> },
    { path: "/product/1", element: <BenchGrinder /> },
    { path: "/product/2", element: <DoubleAbrasive /> },
    { path: "/product/3", element: <Eclasssthree /> },
    { path: "/product/4", element: <Aclasssthree /> },
    { path: "/product/5", element: <PolisherCum /> },
    { path: "/product/6", element: <BeltSender /> },
    { path: "/product/7", element: <FlangeMounting /> },
    { path: "/product/8", element: <PipeGrinder2 /> },
    { path: "/product/9", element: <PipeGrinder4 /> },
    { path: "/product/10", element: <Polishertwobearings /> },
    { path: "/product/11", element: <Polisherfourbearings /> },
    { path: "/product/12", element: <BenchGrinder2BearingSingle /> },
    { path: "/product/13", element: <BenchGrinder2BearingThree /> },
    { path: "/product/14", element: <GrindercumPolisher2Bearings /> },
    { path: "/product/15", element: <FlexibleshaftGrinder /> },
    { path: "/product/16", element: <HeavyDoubleSide /> },
  ],
  {
    // Add a scroll-to-top behavior here
    onResolve: () => {
      window.scrollTo(0, 0);
    },
  }
);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
