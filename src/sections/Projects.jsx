import React, { use, useState, Suspense } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Computer from "../components/Computer";
import { FaBold, FaGit, FaGithub } from "react-icons/fa";
import { IconBase } from "react-icons";

const Projects = () => {
  const [SelectedProject, setSelectedProject] = useState(0);
  const currntProject = myProjects[SelectedProject];

  const ProjectsSize = myProjects.length;
  const handleNavigation = (direction) => {
    setSelectedProject((prev) => {
      if (direction === "previous") {
        return prev === 0 ? ProjectsSize - 1 : prev - 1;
      } else {
        return prev === ProjectsSize - 1 ? 0 : prev + 1;
      }
    });
  };
  return (
    <section id="projects" className="c-space my-20">
      <p className="head-text">Projects & Activities</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 min-h-[600px] overflow-hidden">
          {/* Enhanced Spotlight */}
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] opacity-100 z-0">
            <div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                background: currntProject.spotlightColor,
                animation: "breathing 3s ease-in-out infinite alternate",
              }}
            ></div>
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currntProject.logoStyle}
          >
            <img
              src={currntProject.logo}
              alt="logo"
              className="w-12 h-12 shadow-sm"
            />
          </div>
          <div className="flex flex-col flex-grow justify-between">
            {" "}
            {/* This wrapper ensures content pushes buttons down */}
            <div className="flex flex-col gap-5 text-white-600">
              <p className="text-white text-2xl font-semibold animatedText">
                {currntProject.title}
              </p>
              <p className="animatedText">{currntProject.desc}</p>
              <p className="animatedText">{currntProject.subdesc}</p>
              <p className="animatedText">
                <strong>Tech-Stack : </strong> {currntProject.technologies}
              </p>
            </div>
            {/* Navigation buttons - will stay at bottom */}
            <div className="flex justify-between items-center mt-7 z-10">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
              >
                <img src="/assets/Left.png" alt="left" className="w-4 h-4" />
              </button>
              {currntProject.href  ? <a
                href={currntProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
               <FaGithub style={{ color: "white" }} className="w-8 h-8" />
              </a>: ""}
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
              >
                <img src="/assets/Right.png" alt="right" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 1.2} />
            <pointLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -5, 0]} rotation={[0, -0.1, 0]}>
                  <Computer />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 3}
              maxAzimuthAngle={Math.PI / 3}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
