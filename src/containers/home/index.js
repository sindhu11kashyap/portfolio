import React from "react";
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import './style.scss';

const Home = ()=> {

    const navigate = useNavigate();

    const handleNaviageToContactPage=() =>{
        navigate('/contact')

    }

    return (
       <section id="home" className="home">
        <div className="home_text_wrapper">
            <h1>
                Hello, I'm Sindhushee M L <br />
                Front end developer.
            </h1>
            <Animate play duration={1.5} delay={1} start={{transform: 'translateY(550px)'}} 
        end={{transform: 'translatex(0px)'}}>
        <div className="home_text_wrapper_contact_me">
            <button onClick={handleNaviageToContactPage}>Hire Me</button>
        </div>
        </Animate>
        </div>
        
        </section>
    )
}

export default Home;