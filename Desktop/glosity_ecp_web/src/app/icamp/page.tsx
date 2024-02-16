"use client"
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/footer";
import Offer from "@/components/Offer/offer";
import Slider from "@/components/Slider/slider";
import Drop from "@/components/Drop/drop";
import Banner from "@/components/Banner/banner";

const Icamp = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 886);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={isSmallDevice ? { background: "white" } : {}}>
      <Banner />
      <Slider />
      <Offer />
      <Drop />
      <Footer />
    </div>
  );
};

export default Icamp;
