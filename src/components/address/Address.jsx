import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./address.css";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Address = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".address_container",
        start: "top 100%", // Trigger animation when the top of the container hits 80% of the viewport
        end: "bottom 10%", // End animation when the bottom of the container hits 20% of the viewport
        toggleActions: "play none none none", // Play animation on enter
      },
      defaults: { ease: "power2.out" },
    });

    // Animate header title characters
    tl.fromTo(
      ".address_title ",
      { opacity: 0, y: -70 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      ".address_title .des",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    );

    // Animate address grid items
    tl.fromTo(
      ".address_sm_grid",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.2, stagger: 0.05 }
    );

    // Animate address images
    tl.fromTo(
      ".address_img",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.8,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animate address text
    tl.fromTo(
      ".address_loactor",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.02 }
    );
  }, []);

  return (
    <div className="address_container">
      <h2 className="header_title address_title">
        <span className="calligraphy_font_character address_title">A</span>
        <h2 className="aother des first address_title">DRESA</h2>
      </h2>

      <div className="address_grid">
        <div className="address_sm_grid">
          <div className="address_img">
            <img
              src="https://i.imgur.com/QpH9p6e.jpeg"
              alt=""
              className="address_imger"
            />
          </div>
          <p className="address_loactor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            vitae?
          </p>
        </div>
        <div className="address_sm_grid">
          <div className="address_img">
            <img
              src="https://i.imgur.com/j49ElSj.jpeg"
              alt=""
              className="address_imger"
            />
          </div>
          <p className="address_loactor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            vitae?
          </p>
        </div>
      </div>

      <h2 className="another_text">kompleksi golden</h2>
      <div className="google_link">
        <a href="" className="google">
          Google Link
          <div className="arrower">
            <FaArrowRight className="arrow" />{" "}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Address;
