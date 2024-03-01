import React from "react";
import { Link } from "react-router-dom";
import data from '../navBar/index';



const footer = () =>{
return (
    <>
    <div className="fotter">
        <div className="footer_about">
        <h3>About</h3>
         <p>SindhuSree ML</p>
         <p>Experienced web developer with over 5+ years of expertise, demonstrating a track record in crafting
innovative and visually appealing websites. Actively seeking a challenging career opportunity to apply
skills and contribute to a successful and collaborative team. </p>
        </div>
        <div className="footer_links">
            <ul>
                {
                    data.map((item,i)=>(
                        <li key={i}>
                            <Link to={item.to} >
                            {item.label}
                            <Link />
                        </li>
                    ))
                }
               
            </ul>
            </div>
    </div>
    </>
);
}

export default footer;