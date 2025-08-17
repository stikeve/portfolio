import { useState, useEffect, useRef } from "react";
import { certifications } from "../constants";

const Misc = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let animationFrameId;

    // Common handlers for both mouse and touch
    const startHandler = (clientX) => {
      isDown = true;
      const rect = ticker.getBoundingClientRect();
      startX = clientX - rect.left;
      scrollLeft = ticker.scrollLeft;
      setAutoRotate(false);
    };

    const moveHandler = (clientX) => {
      if (!isDown) return;
      const rect = ticker.getBoundingClientRect();
      const x = clientX - rect.left;
      const walk = (x - startX) * 1.5; // Adjust multiplier for sensitivity

      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        ticker.scrollLeft = scrollLeft - walk;
      });
    };

    const endHandler = () => {
      isDown = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      setAutoRotate(true);
    };

    // Mouse event handlers
    const mouseDownHandler = (e) => {
      startHandler(e.clientX);
      e.preventDefault();
    };
    const mouseMoveHandler = (e) => moveHandler(e.clientX);
    const mouseUpHandler = endHandler;
    const mouseLeaveHandler = endHandler;

    // Touch event handlers
    const touchStartHandler = (e) => {
      if (e.touches.length === 1) {
        startHandler(e.touches[0].clientX);
        e.preventDefault();
      }
    };

    const touchMoveHandler = (e) => {
      if (e.touches.length === 1) {
        moveHandler(e.touches[0].clientX);
        e.preventDefault();
      }
    };

    const touchEndHandler = endHandler;

    // Add event listeners
    ticker.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    ticker.addEventListener("mouseleave", mouseLeaveHandler); // Added mouseleave

    ticker.addEventListener("touchstart", touchStartHandler, { passive: false });
    ticker.addEventListener("touchmove", touchMoveHandler, { passive: false });
    ticker.addEventListener("touchend", touchEndHandler);

    return () => {
      // Remove event listeners
      ticker.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      ticker.removeEventListener("mouseleave", mouseLeaveHandler); // Removed mouseleave

      ticker.removeEventListener("touchstart", touchStartHandler);
      ticker.removeEventListener("touchmove", touchMoveHandler);
      ticker.removeEventListener("touchend", touchEndHandler);

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Auto-rotate certifications
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certifications.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate, certifications.length]);

  return (
    <section className="certifications-carousel">
      <h3 className="head-text">Certifications</h3>

      <div className="certifications-carousel__container">
        {/* Description panel (left side) */}
        <div className="certifications-carousel__description">
          {/* Top section - Description content */}
          <div className="description-content-container">
            <h4 className="certifications-carousel__description-title">
              {certifications[activeIndex].title}
            </h4>
            <div
              className="description-text-scrollable"
              ref={tickerRef}
              style={{
                overflowX: 'auto',
                cursor: 'grab',
                userSelect: 'none',
                touchAction: 'pan-y'
              }}
            >
              <p className="certifications-carousel__description-text">
                {certifications[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Bottom section - Skills and buttons */}
          <div className="bottom-section">
            <div className="certifications-carousel__skills">
              <h5 className="certifications-carousel__skills-heading">
                Skills Gained:
              </h5>
              <div
                className="skills-ticker"
                ref={tickerRef} // Attach ref to the skills ticker as well
              >
                <ul>
                  {[...certifications[activeIndex].skills].map((skill, i) => (
                    <li key={i} className="skill-pill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                className="certifications-carousel__nav-button certifications-carousel__nav-button--prev"
                onClick={() =>
                  setActiveIndex(
                    (prev) =>
                      (prev - 1 + certifications.length) % certifications.length
                  )
                }
              >
                <img src="/assets/Left.png" alt="right" className='w-4 h-4'/>
              </button>
              <a
                href={certifications[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="certifications-carousel__credential-link"
              >
                <div className="flex items-center gap-2">
                  View Credential
                  <img src="/assets/trend.png" alt="verify" className='w-6 h-6' />
                </div>
              </a>
              <button
                className="certifications-carousel__nav-button certifications-carousel__nav-button--next"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % certifications.length)
                }
              >
                <img src="/assets/Right.png" alt="right" className='w-4 h-4'/>
              </button>
            </div>
          </div>
        </div>
        {/* Carousel panel (right side) */}
        <div
          className="certifications-carousel__carousel"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {certifications.map((cert, index) => {
            const position =
              (activeIndex - index + certifications.length) %
              certifications.length;
            let transform, zIndex, opacity, left;

            if (position === 0) {
              // Active card (centered)
              transform = "translateX(0) scale(1)";
              zIndex = 10;
              opacity = 1;
              left = "5%";
            } else if (position === 1) {
              // Next card (right side)
              transform = "translateX(40%) scale(0.85)";
              zIndex = 5;
              opacity = 1;
              left = "20%";
            } else if (position === certifications.length - 1) {
              // Previous card (hidden behind description)
              transform = "translateX(-70%) scale(0.85)";
              zIndex = 3;
              opacity = 0.6;
              left = "0%";
            } else if (position === certifications.length - 2) {
              // Far left card (barely visible)
              transform = "translateX(-80%) scale(0.80)";
              zIndex = 1;
              opacity = 1;
              left = "-60%";
            } else if (position === 2) {
              // Far right card
              transform = "translateX(80%) scale(0.75)";
              zIndex = 1;
              opacity = 1;
              left = "20%";
            } else {
              // Other cards (hidden)
              transform = "translateX(100%) scale(0)";
              zIndex = 0;
              opacity = 0;
              left = "-100%";
            }

            return (
              <div
                key={cert.id}
                className={`certifications-carousel__card ${
                  position === 0 ? "active" : ""
                }`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  left,
                  transition: "all 0.5s ease",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certifications-carousel__card-image"
                />
                <div className="certifications-carousel__card-overlay">
                  <h4 className="certifications-carousel__card-title">
                    {cert.title}
                  </h4>
                  <p className="certifications-carousel__card-issuer">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Misc;