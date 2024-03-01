import { Line } from "rc-progress";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeader from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './style.scss';



const Skills = () => {
    return (
      <section id="skills" className="skills">
       <PageHeader 
        heaaderText = "Skills" 
        icon =  {<GiSkills size={30} />}
        />
        <div className="skills_content_wrapper">
          {skillsData.map((item, i) => (
            <div key={i} className="skills_content_wrapper_inner_content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills_content_wrapper_inner_content_category_text">
                  {item.label}
                </h3>
                <div className="skills_content_wrapper_inner_content_progressbar_container">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity : 1", "opacity : 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar_wrapper" key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Skills;