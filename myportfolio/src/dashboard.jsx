import React, { useRef } from "react";
import Nav from "./component/navbar/Nav";
import Home from "./component/Homepage/Home";
import Acheivements from "./component/Acheivement/Acheivements";
import About from "./component/about/About";
import Footer from "./component/footer/footer";

const Dashboard = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const achievementsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="dashboard">
      <Nav
        homeRef={homeRef}
        achievementsRef={achievementsRef}
        aboutRef={aboutRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={achievementsRef}>
        <Acheivements />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
