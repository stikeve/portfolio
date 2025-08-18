import { useState } from "react";
import Button from "../components/Button";
import SkillsGrid from "../components/SkillsGrid";
import ResponsiveGlobe from "../components/ResponsiveGlobe";

// add media queries to make the effects diffrent on smaller screens as on hover is not possible on mobile devices without aditional state code.
const About = () => {
  const [copy, setCopy] = useState(false);

  const handlecopy = () => {
    navigator.clipboard.writeText("Ashutoshg.formal@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/Bio.jpeg"
              alt="My Pic"
              className=" rounded-full w-full h-full object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi, I'm Ashutosh</p>
              <p className="grid-subtext text-justify">
                Master's graduate with a passion for software development and a
                keen interest in technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/codeCode.gif"
              alt="progression"
              className="h-[156px] rounded-2xl w-full "
            />
            <div>
              <p className="grid-headtext">Professional Summary</p>
              <p className="grid-subtext text-justify">
               Software Engineer with 2+ years of experience in software development and project coordination, building expertise across scalable systems and Agile delivery. Skilled in requirements analysis, timeline management, and cross-functional collaboration while drawing on a strong technical background. Passionate about expanding into management-focused roles to apply both technical and organizational skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            {/* !dev note - to be done later : move to a sepaarte component as its creating too much clutter  - done */}
            <ResponsiveGlobe />
            <div>
              <p className="grid-headtext">Based in Dublin, Ireland</p>
              <p className="grid-subtext">
                Open to relocation | Can work remotely
              </p>
              {/* https://drive.usercontent.google.com/u/0/uc?id=1vsIhikB7ElaN4xKr3drOR50ugcoS-B49&export=download */}
              {/* change this to a contact section button later */}
              <a href="#contact" className="w-fit">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10  hover:shadow-[0_0_10px_green] active:shadow-[0_0_10px_red]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext"> Skills</p>
              <SkillsGrid />
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="leetcard-container bg-dark/5 p-2 rounded-xl">
              <a href="https://leetcode.com/stikeve/" target="_blank">
                <img
                  src="https://leetcard.jacoblin.cool/stikeve?theme=dark&border=0&radius=10"
                  className="w-full h-auto max-h-[280px] md:max-h-[350px]"
                  alt="LeetCode Stats"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="space-y-2">
              <p className="grid-subtext text-center">Connect</p>
              <p className="copy-container text-center" onClick={handlecopy}>
                {/* Clipboard icons created by Royyan Wijaya - Flaticon | Tick icon by Icons8 */}
                <img
                  src={copy ? "/assets/tick.png" : "/assets/copy.png"}
                  alt="copy Button"
                  className="h-7"
                />
                <span className="lg:text-l md:text-sm font-medium text-grey_gradiant text-white">
                  Ashutoshg.formal@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
