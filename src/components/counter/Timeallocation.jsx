import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./time.css";
import cocktail from "../../assets/cocktail.png";
import letter from "../../assets/cake.png";
import cake from "../../assets/wedding-cake.png";
import ring from "../../assets/wedding-rings.png";
import dinner from "../../assets/food.png"

gsap.registerPlugin(ScrollTrigger);

const Timeallocation = () => {
  useEffect(() => {
    // GSAP timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timer",
        start: "top 100%",
        end: "bottom 10%",
        toggleActions: "play none none none",
        scrub: true,
        once: true
      },
      defaults: { ease: "power2.inOut" },
    });

    // Animate the title
    tl.fromTo(
      ".timetitle",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.1 }
    );

    // Animate the bottom line
    tl.fromTo(
      ".usedefaultline",
      { scaleX: 0, transformOrigin: "left center", opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.1, ease: "power2.out" }
    );

    // Animate each time allocated sub-grid
    tl.fromTo(
      ".time_allocated_sub_grid",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.1, stagger: 0.1 }
    );

    // Animate the circles
    
  }, []);

  return (
    <div className="timer">
      <h2 className="header_title timetitle">
        {/* <span className="calligraphy_font_character usedefault aother">P</span> */}
        <h2 className="aother first usedfaulter">Programmi</h2>
      </h2>
      <div className="jkob">
        
      </div>
      <div className="time_allocated_grid">
        <div className="time_allocated_sub_grid">
          <div className="time_allocated_image_section">
            <img src={letter} alt="" className="time_allocator_img" />
          </div>
          <div className="crcle"></div>
          <h2 className="time_title">paraqitja e te ftuarve</h2>
          <h3 className="focus_time">17.30</h3>
        </div>
        <div className="time_allocated_sub_grid">
          <div className="time_allocated_image_section">
            <img src={ring} alt="" className="time_allocator_img" />
          </div>
          <div className="crcle"></div>
          <h2 className="time_title">Ceremenia</h2>
          <h3 className="focus_time">18.00</h3>
        </div>
        <div className="time_allocated_sub_grid">
          <div className="time_allocated_image_section">
            <img src={cocktail} alt="" className="time_allocator_img" />
          </div>
          <div className="crcle"></div>
          <h2 className="time_title">Koteil</h2>
          <h3 className="focus_time">19.00</h3>
        </div>
        <div className="time_allocated_sub_grid nalx">
          <div className="time_allocated_image_section">
            <img src={dinner} alt="" className="time_allocator_img" />
          </div>
          <div className="crcle"></div>
          <h2 className="time_title">Darka</h2>
          <h3 className="focus_time">20.00</h3>
        </div>
        <div className="time_allocated_sub_grid">
          <div className="time_allocated_image_section">
            <img src={cake} alt="" className="time_allocator_img" />
          </div>
          <div className="crcle"></div>
          <h2 className="time_title">Torta</h2>
          <h3 className="focus_time">00.00</h3>
        </div>
      </div>
    </div>
  );
};

export default Timeallocation;
