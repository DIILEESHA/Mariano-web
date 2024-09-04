import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./kodi.css";

gsap.registerPlugin(ScrollTrigger);

const Kodi = () => {
  useEffect(() => {
    // Animate dress grid items (top to bottom)
    gsap.fromTo(
      ".dress_grid .dress_sub_grid",
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".dress_grid",
          start: "top 80%", // Animation triggers when the top of the dress_grid hits 80% of the viewport height
          toggleActions: "play none none none", // Animation plays once, no repeats
          once: true, // Ensures the animation only plays once per session
        },
      }
    );
  }, []);

  return (
    <div className="kodi">
      <h2 className="header_title">
        {/* <span className="calligraphy_font_character minimize aother">D</span> */}
        <h2 className="aother dap first">Dress</h2>
        {/* <h2 className="calligraphy_font_character minimize aother">C</h2> */}
        <h2 className="aother dap">Code</h2>
      </h2>
      <div className="bottom_line "></div>
      <p className="dress_code_para">
        ju lutemi te keni nje veshje dinjitoze dhe modeste, e cila te mos jete
        teper e shurter, e ngushte ose provokuese. Ngjyra e veshjes mund te
        zgjighet sipas preferences suaj!
      </p>
      {/* Color palette */}
      <div className="dress_color_palatee_grid">
        <div className="sub_color_palatee">k</div>
        <div className="sub_color_palatee"></div>
        <div className="sub_color_palatee"></div>
        <div className="sub_color_palatee"></div>
      </div>
      {/* Dress examples */}
      <div className="dress_grid">
        <div className="dress_sub_grid">
          <div className="dress_image_section">
            <img
              src="https://www.brides.com/thmb/s-VxdBtMWuZRW-zm1Wx4dvLQnZM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gold-bridesmaid-dreses-recirc-kesha-lambert-photography-9a158c9fbd7d40808ab490febc4717cc.jpg"
              alt="wedding_dress"
              className="dress_img"
            />
          </div>
        </div>
        <div className="dress_sub_grid">
          <div className="dress_image_section">
            <img
              src="https://www.brides.com/thmb/9Ykk2kTxJYTiqw67L-PBfyLk6wc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Khiari-Curtis_14-f7b2ad02b7224b529965102563a5b8ef.jpg"
              alt="wedding_dress"
              className="dress_img"
            />
          </div>
        </div>
        <div className="dress_sub_grid">
          <div className="dress_image_section">
            <img
              src="https://www.brides.com/thmb/__3xtW8BlT1yiu5K8QK2C4Y-ECc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chris-and-breanna-wedding05-0fea1a619b5840dea3a97cbe57e3c8cc.jpg"
              alt="wedding_dress"
              className="dress_img"
            />
          </div>
        </div>
        <div className="dress_sub_grid">
          <div className="dress_image_section">
            <img
              src="https://www.brides.com/thmb/WGC2IcAON_ccuS73jyxki7_ekx4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jordana-andrew_21-b1a325a19eb14332964063ce90b06a19.jpg"
              alt="wedding_dress"
              className="dress_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kodi;
