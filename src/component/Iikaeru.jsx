import React, { useEffect, useState } from "react";
import A001 from "../assets/photo/A001.png";
import A003 from "../assets/photo/A003.png";
import B001 from "../assets/photo/B001.png";
import B008 from "../assets/photo/B008.png"; // FIXED
import B091 from "../assets/photo/B091.png";
import logo from "../assets/photo/logo.png";
import Rulebook01 from "../assets/photo/Rulebook01.jpg";
import Rulebook02 from "../assets/photo/Rulebook02.jpeg";
import Rulebook03 from "../assets/photo/Rulebook03.jpeg";
import Rulebook04 from "../assets/photo/Rulebook04.jpeg";
import Rulebook05 from "../assets/photo/Rulebook05.jpeg";
import Rulebook06 from "../assets/photo/Rulebook06.jpeg";

import "./Iikaeru.css";

const Iikaeru = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [show, setShow] = useState(false);
  const [showCards, setShowCards] = useState(false);

  //welcome screen animation
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  //scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const bottomSection = document.getElementById("bottom-section");
      if (bottomSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionPosition = bottomSection.offsetTop;

        if (scrollPosition > sectionPosition + 100) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //show card and touch
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".top")) {
        setShowCards(flase);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle card visibility on mobile
  const handleTouch = () => {
    setShowCards(!showCards);
  };

  return (
    <>
      {/*welcome screen*/}
      {showWelcome && (
        <div className="welcome-screen">
          <img src={logo} className="welcome-logo" alt="welcome-logo" />
        </div>
      )}

      <section id="top-section">
      <div className={`top ${showCards ? "active" : ""}`} onClick={handleTouch}>
          <img src={A003} className="card-03" alt="card-03" />
          <img src={B008} className="card-04" alt="card-04" />
          <img src={B001} className="card-02" alt="card-02" />
          <img src={A001} className="card-01" alt="card-01" />
          <img src={B091} className="Any" alt="card-05" />
          <img src={logo} className="top-img" alt="top-image" />
        </div>
      </section>

      <section id="bottom-section">
        <div className={`bottom ${show ? "show" : ""}`}>
          <img src={Rulebook01} className="rule01" alt="Rulebook page 1" />
          <img src={Rulebook02} className="rule02" alt="Rulebook page 2" />
          <img src={Rulebook03} className="rule03" alt="Rulebook page 3" />
          <img src={Rulebook04} className="rule04" alt="Rulebook page 4" />
          <img src={Rulebook05} className="rule05" alt="Rulebook page 5" />
          <img src={Rulebook06} className="rule06" alt="Rulebook page 6" />
        </div>
      </section>
    </>
  );
};

export default Iikaeru;
