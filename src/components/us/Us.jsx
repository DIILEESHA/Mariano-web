import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./us.css";
import ThreeImage from "../threeimages/ThreeImage";
gsap.registerPlugin(ScrollTrigger);
const Us = () => {
  useEffect(() => {
    // Animate dress grid items (top to bottom)
    gsap.fromTo(
      ".gaper, .buildy",
      { y: -70, opacity: 0 },
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
    <div className="kodi nalada">
      <h2 className="header_title">
        <span className="calligraphy_font_character doda ">U</span>
        <h2 className="aother dap mallz first">s</h2>
      </h2>
      <div className="bottom_line tuha"></div>

        <ThreeImage />
      <div className=" gaper">
        <div className="dress_sub_grid buildy">
          <div className="dress_image_section">
            <img
              src="https://images.pexels.com/photos/4997169/pexels-photo-4997169.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="wedding_dress"
              className="dress_imger"
            />
          </div>
        </div>


        <div className="dress_sub_grid  buildy">
          <div className="dress_image_section">
            <img
              src="https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="wedding_dress"
              className="dress_imger"
            />
          </div>
        </div>

        <div className="dress_sub_grid  buildy mular">
          <div className="dress_image_section">
            <img
              src="https://images.pexels.com/photos/5095854/pexels-photo-5095854.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="wedding_dress"
              className="dress_imger bulla"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
