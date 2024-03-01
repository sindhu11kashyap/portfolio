import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import {DiCss3, DiHtml5, DiJavascript1, DiReact} from 'react-icons/di'
import './style.scss';

const personalDetails = [
    {
        label: "Name",
        value: "Sindhushree ML",
    },

    {
        label: "Age",
        value: "28",
    },

    {
        label: "Address",
        value: "Amruthalli, Bangalore - 560092",
    },

    {
        label: "Email",
        value: "sindhu11kashyap@gmail.com",
    },

    {
        label: "Contact No",
        value: "+91 8088136506",
    }
]

const jobSummary = 'Experienced web developer with over 5+ years of expertise, demonstrating a track record in crafting innovative and visually appealing websites. Actively seeking a challenging career opportunity to apply skills and contribute to a successful and collaborative team.'

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <PageHeader heaaderText="About me" icon={<BsFillInfoCircleFill size={30} />} />

                <div className="about_content">
                    <div className="about_content_personalWrapper">
                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translatex(0px)' }}>
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>


                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(-500px)' }}
                        end={{ transform: 'translatex(0px)' }}>
                    <h3 className="personalInformationHeaderText">Personal Information</h3>
                    
                    <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className="title">{item.label}:</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                    </ul>
                    </Animate>
                    </div>


                    <div className="about_content_servicesWrapper">
                    <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translatex(0px)' }}>
                        <div className="about_content_servicesWrapper_innerContent">
                            <div><DiHtml5 size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiCss3 size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiJavascript1 size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiReact size={60} color="var(--yellow-theme-main-color)" /></div>
                        </div>
                        </Animate>
                    </div>
                  
                  
                </div>
            </section>
        </>
    );
}

export default About;