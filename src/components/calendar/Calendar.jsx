import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./calendar.css";
import heart from "../../assets/heart.png";

gsap.registerPlugin(ScrollTrigger);

const Calendar = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".calendar",
        start: "top 105%",
        end: "bottom 10%", 
        toggleActions: "play none none none",
      },
      defaults: { ease: "power1.inOut" },
    });


    tl.fromTo(
      ".calendar_title",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05 }
    );

    tl.fromTo(
      ".calendar_title .cal",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 }, // Reduced duration for faster load
      "-=0.4" // Overlap to speed up the sequence
    );

    // Animate the actual date
    tl.fromTo(
      ".actual_date",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8 } // Reduced duration for faster load
    );

    // Animate the bottom line
    tl.fromTo(
      ".mas",
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "center", duration: 0.3 },
      "-=0.4" // Overlap to speed up the sequence
    );

    // Animate calendar grid dates
    tl.fromTo(
      ".calendar_grid .sub_grid_date",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 } // Reduced duration and stagger for faster load
    );

    // Animate the heart icon (on the 27th)
    tl.fromTo(
      ".sub_grid_date.moha .heart_icon",
      { scale: 0, rotation: -360 },
      { scale: 1.2, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" } // Reduced duration for quicker load
    ).to(".sub_grid_date.moha .heart_icon", {
      scale: 1,
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="calendar">
      <h2 className="header_title calendar_title">
        {/* <span className="calligraphy_font_character calendar_title aother">T</span> */}
        <h2 className="aother cal first">TETOR</h2>
      </h2>

      <h2 className="actual_date">September 2024</h2>
      <div className="bottom_line "></div>

      <div className="calendar_grid">
        <div className="sub_grid_date"></div>
        <div className="sub_grid_date">1</div>
        <div className="sub_grid_date">2</div>
        <div className="sub_grid_date">3</div>
        <div className="sub_grid_date">4</div>
        <div className="sub_grid_date">5</div>
        <div className="sub_grid_date">6</div>
        <div className="sub_grid_date">7</div>
        <div className="sub_grid_date">8</div>
        <div className="sub_grid_date">9</div>
        <div className="sub_grid_date">10</div>
        <div className="sub_grid_date">11</div>
        <div className="sub_grid_date">12</div>
        <div className="sub_grid_date">13</div>
        <div className="sub_grid_date">14</div>
        <div className="sub_grid_date">15</div>
        <div className="sub_grid_date">16</div>
        <div className="sub_grid_date">17</div>
        <div className="sub_grid_date">18</div>
        <div className="sub_grid_date">19</div>
        <div className="sub_grid_date">20</div>
        <div className="sub_grid_date">21</div>
        <div className="sub_grid_date">22</div>
        <div className="sub_grid_date">23</div>
        <div className="sub_grid_date">24</div>
        <div className="sub_grid_date">25</div>
        <div className="sub_grid_date">26</div>
        <div className="sub_grid_date moha">
          <img className="heart_icon" src={heart} alt="Heart icon" />
        </div>
        <div className="sub_grid_date">28</div>
        <div className="sub_grid_date">29</div>
        <div className="sub_grid_date">30</div>
        <div className="sub_grid_date"></div>
        <div className="sub_grid_date"></div>
        <div className="sub_grid_date"></div>
      </div>
    </div>
  );
};

export default Calendar;
