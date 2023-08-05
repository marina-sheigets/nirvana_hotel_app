import React from "react";
import Header from "../../features/Header/Header";
import About from "../../features/About/About";
import Advantages from "../../features/Advantages/Advantages";
import Rooms from "../../features/Rooms/Rooms";
import Gallery from "../../features/Gallery/Gallery";
import Map from "../../features/Map/Map";
import Contacts from "../../features/Contacts/Contacts";
import Footer from "../../features/Footer/Footer";

function MainPage() {
  return (
    <div>
      <Header />
      <About />
      <Advantages/>
      <Rooms/>
      <Gallery/>
      <Map/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default MainPage
