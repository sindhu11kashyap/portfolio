import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import PageHeader from "../../components/pageHeaderContent";
import { GrContact } from "react-icons/gr";
import { Animate } from 'react-simple-animate';
import './style.scss';

const Contact = () => {    
 
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_fqmxd7i', 'template_b2f7ou2', form.current, {
              publicKey: 'XCBUoAc1PDinAvMHo',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
            e.target.reset();
        };
       
  
    return (
        <>
            <section id="contact" className="contact">
                <PageHeader
                    heaaderText="My Contact"
                    icon={<GrContact size={30} />}
                />

                <div className="contact_content">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "TranslateX(-200px)"
                        }}
                        end={{
                            transform: "TranslateX(0px)"
                        }}>
                        <h3 className="contact_content_header_text"> Let's Talk</h3>
                    </Animate>

                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "TranslateX(200px)"
                        }}
                        end={{
                            transform: "TranslateX(0px)"
                        }}>

                        <form ref={form} onSubmit={sendEmail} className="emailForm">
                        <div className="contact_content_form">

                            <div className="contact_content_form_controlswrapper">
                                
                                    <div className="namewrapper">

                                        <input required name="user_name" className="inputName" type={'text'}
                                             />
                                        <label htmlFor="name" className="nameLabel">Name</label>
                                    </div>
                                    <div className="emailwrapper">
                                        <input required name="user_email" className="inputEmail" type={'text'} 
                                             />
                                        <label htmlFor="email" className="emailLabel">Email</label>
                                    </div>
                                    <div className="descriptioncwrapper">
                                        <textarea required name="message" className="inputDesc" type={'text'} rows="5"  />
                                        <label htmlFor="description" className="descLabel">Description</label>
                                    </div>                             
                               
                            </div>                           
                            <button type="submit" value="send">Submit</button>
                        </div>
                        </form>

                    </Animate>

                </div>

            </section>
        </>
    )
}

export default Contact;