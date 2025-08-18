import React, { useState } from "react";
import { workExperiences, educationHistory } from "../constants";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="work" className="c-space my-20">
      <div className="w-full text-white-600">
 

        {/* Header */}
        <h3 className="head-text">
          {activeTab === "work" ? "My Work Experience" : "My Education"}
        </h3>
        <div className="flex mt-7 relative ">
  {/* Active tab background shape */}
  <div className="absolute top-0 left-0 w-full h-full flex z-0">
    <div
      className={`border-t border-l  border-black-300 border-r transition-all  duration-300 ease-in-out w-1/2 h-full rounded-t-lg bg-black-200  ${
        activeTab === "education" ? "translate-x-full" : ""
      }`}
    ></div>
  </div>

  <button
    className={` work-tabs ${
      activeTab === "work"
        ? "active-tab"
        : "inactive-tab "
    }`}
    onClick={() => setActiveTab("work")}
  >
    Work Experience
  </button>
  <button
    className={` work-tabs ${
      activeTab === "education"
        ? "active-tab"
        : "inactive-tab "
    }`}
    onClick={() => setActiveTab("education")}
  >
    Education
  </button>
</div>

        {/* Content */}
    <div className="work-container ">

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {(activeTab === "work" ? workExperiences : educationHistory).map(
                ({ id, name, pos, icon, duration, title }) => (
                  <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img
                          src={icon}
                          alt={`${name} logo`}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="work-content_bar"></div>
                    </div>
                    <div className="sm:p-5 px-2.5 py-2.5 ">
                      <p className="font-bold text-white-600">{name}</p>
                      <p className="text-sm mb-3">
                        {pos} <br />{duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
