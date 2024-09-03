import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    // Animate header title characters
    tl.fromTo(
      ".head .heado",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.01 }
    );

    // Animate the other text
    tl.fromTo(
      ".head, .heado",
      { opacity: 0 }, { opacity: 1, duration: 1 });
    // Animate couple name
    tl.fromTo(".couple_name", { opacity: 0 }, { opacity: 1, duration: 1 });

    // Animate bottom line
    tl.fromTo(
      ".bottom_line",
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "center", duration: 0.5 },
      "-=0.1"
    );

    // Animate follow title
    tl.fromTo(".follow_title", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="header">
      <div className="header_container">
        <h2 className="header_title head">
          <span className="calligraphy_font_character head">S</span>
          <h2 className="aother heado first">AVE THE</h2>
          <h2 className="calligraphy_font_character head">D</h2>
          <h2 className="aother heado">ATE</h2>
        </h2>
      </div>

      <div className="bottomly">
        <h2 className="couple_name">
          Eduard
          <span className="and_operator" style={{ margin: "0px 10px" }}>
            &
          </span>
          Xhensila
        </h2>

        <div className="bottom_line"></div>

        <p className="follow_title">
          me kenaqesi ju ftojm te beheni pjese e dites tone me te bukur!
        </p>
      </div>
    </div>
  );
};

export default Header;
