import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./us.css";
gsap.registerPlugin(ScrollTrigger);
const Us = () => {
    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".nalada",
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none",
            scrub: true,
          },
          defaults: { ease: "power2.inOut" }, // Smooth easing for a calm effect
        });
    
        // Animate the title with a soft entrance
        tl.fromTo(
          ".sus",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5 }
        );
    
        // Animate the bottom line with a gentle scaling effect
        tl.fromTo(
          ".tuha",
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "center", duration: 1 },
          "-=1"
        );
    
        // Animate the dress image sections with a gentle fade-in and slight rotation
        tl.fromTo(
          ".buildy",
          { opacity: 0, y: 0, rotation: 5 },
          { opacity: 1, y: 0, rotation: 0, duration: 1.5, stagger: 0.4 }
        );
      }, []);

  return (
    <div className="kodi nalada">
      <h2 className="header_title">
        <span className="calligraphy_font_character minimize  sus">U</span>
        <h2 className="aother dap first">s</h2>
      </h2>
      <div className="bottom_line tuha"></div>

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
