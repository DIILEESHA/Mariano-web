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
        start: "top 80%", // when the top of the calendar hits 80% of the viewport
        end: "bottom 20%", // when the bottom of the calendar hits 20% of the viewport
        toggleActions: "play none none none", // play animation when triggered
      },
      defaults: { ease: "power1.inOut" },
    });

    // Animate header title characters
    tl.fromTo(
      ".calendar_title ",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );

    tl.fromTo(
      ".calendar_title .cal",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    );

    // Animate the actual date
    tl.fromTo(
      ".actual_date",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    );

    // Animate the bottom line
    tl.fromTo(
      ".mas",
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "center", duration: 0.3 },
      "-=0.5"
    );

    // Animate calendar grid dates
    tl.fromTo(
      ".calendar_grid .sub_grid_date",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );

    // Animate the heart icon (on the 27th)
    tl.fromTo(
      ".sub_grid_date.moha .heart_icon",
      { scale: 0, rotation: -360 },
      { scale: 1.2, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    ).to(".sub_grid_date.moha .heart_icon", {
      scale: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="calendar">
      <h2 className="header_title calendar_title">
        <span className="calligraphy_font_character calendar_title">T</span>
        <h2 className="aother cal first">ETOR</h2>
      </h2>

      <h2 className="actual_date">September 2024</h2>
      <div className="bottom_line mas"></div>

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
