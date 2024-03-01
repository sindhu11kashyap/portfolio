import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import { TbListDetails } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import {MdWork} from 'react-icons/md'
import {data} from './utils';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './style.scss';
import cv from '../../resume/Resume-Sindhushree-2024.pdf';

const Resume = ()=> {
    return (
        <>
         <section id="resume" className="resume">
        <PageHeader 
        heaaderText = "Resume" 
        icon =  {<TbListDetails size={30} />}
        />
        
        <div className="timeline"> 
        <div className="timeline_experience">
            <h3 className="timeline_experience_header_text">experience</h3>
            <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
            >
                {
                    data.experience.map((item,i)=>(
                        <VerticalTimelineElement
                        key={i}
                        className="timeline_experience_virticle_timeline_element"
                        contentStyle={{
                            background: 'none', 
                            color: 'var(--yellow-theme-sub-text-color)',
                            border: '1.5px solid var(--yellow-theme-main-color)'
                        }}
                      
                        icon={<MdWork />}
                        iconStyle={{
                            background: '#181818',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                         >
                            <div className="virticle_timeline_element_title_wrapper">
                                <h3 className="virticle_timeline_element_title_wrapper_title">
                                    {item.companyName}  
                                    <span>- {item.title}</span>                                  
                                </h3>
                               
                                <p>{item.description}</p>
                                <h5>{item.skillsGained}</h5>

                            </div>
                        </VerticalTimelineElement>
                    ))
                }

            </VerticalTimeline>
        </div>
        <div className="timeline_education">
        <h3 className="timeline_education_header_text">Education</h3>
        <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
            >
        {
                    data.education.map((item,i)=>(
                        <VerticalTimelineElement
                        key={i}
                        className="timeline_experience_virticle_timeline_element"
                        contentStyle={{
                            background: 'none', 
                            color: 'var(--yellow-theme-sub-text-color)',
                            border: '1.5px solid var(--yellow-theme-main-color)'
                        }}
                       
                        icon={<MdWork />}
                        iconStyle={{
                            background: '#181818',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                         >
                            <div className="virticle_timeline_element_title_wrapper">
                                <h3 className="virticle_timeline_element_title_wrapper_title">
                                    {item.companyName}                                    
                                </h3>
                                <h4>- {item.title}</h4>
                                <p>{item.subTitle}</p>
                                <p>Percentage: {item.percentage}</p>
                                

                            </div>
                        </VerticalTimelineElement>
                    ))
                }
                </VerticalTimeline>
        </div>

        </div>
        <div className="myresume">
        <div>
          <a href={cv} download> 
          <FaRegFilePdf  size={20} />  Download Resume</a>
        </div>
        </div>
        </section>
        </>
    )
}

export default Resume;