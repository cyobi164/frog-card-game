import React, { useEffect, useState } from "react";
import A001 from "../assets/photo/A001.png";
import A003 from "../assets/photo/A003.png";
import B001 from "../assets/photo/B001.png";
import B008 from "../assets/photo/B008.png";
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
        const scrollPosition =
          window.scrollY + window.innerHeight >= sectionPosition;
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
        setShowCards(false);
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
        <div
          className={`top ${showCards ? "active" : ""}`}
          onClick={handleTouch}
        >
          <img src={A003} className="card-03" alt="card-03" />
          <img src={B008} className="card-04" alt="card-04" />
          <img src={B001} className="card-02" alt="card-02" />
          <img src={A001} className="card-01" alt="card-01" />
          <img src={B091} className="Any" alt="card-05" />
          <img src={logo} className="top-img" alt="top-image" />
        </div>
        <h1>新感覚のカードゲーム</h1>
        <button className="buy">今すぐ購入する</button>
      </section>

      {/*言いカエルとは */}
      <section id="iikeru">
        <h2>言いカエルとは</h2>
        <div className="video-container">
          <iframe
            width="560px"
            height="315"
            src=""
            title="Game PV"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/*アピールピント */}
      <section id="point">
        <div className="point-01">
          <h2>創造力とユーモアが試される</h2>
          <p>
            プレイヤーは、お題に対して独自の言い換えを考え、ユニークな回答を考えます。
            <br />
            オリジナルで面白い言い換えをすることが求められるので、
            <br />
            創造力とユーモアセンスが活かせる場です。
          </p>
        </div>
        <div className="point-02">
          <h2>コミュニケーション能力の向上</h2>
          <p>
            ただの言葉遊びではなく、どんな言い回しを選ぶかによって、
            <br />
            プレイヤー同士のコミュニケーションが盛り上がります。
            <br />
            会話のセンスや表現力を試し、みんなで楽しい時間を共有できます
          </p>
        </div>
        <div className="point-03">
          <h2>バリエーション豊かなゲームモード</h2>
          <p>
            さまざまなルールバリエーションがあるため、何度遊んでも新鮮な体験が楽しめます。
            <br />
            例えば、出題者が「ANYカード」を使うことで自由にお題を出したり、
            <br />
            点数を細かく付けることでさらに楽しむこともできます。
          </p>
        </div>
      </section>

      <section id="bottom-section">
        <div className="rule">
          <h2>遊び方法</h2>
        </div>
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
