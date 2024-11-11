import React from "react";
import "./Assets/css/style.css";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div className="cv-layout">
      <div className="cv-container">
        <Sidebar />
        <main className="cv-main">
          <Header />
          <Profile />
          <Experience />
          <Education />
          <Skill />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
