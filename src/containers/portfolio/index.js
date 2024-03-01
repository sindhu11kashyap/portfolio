import React from "react";
import PageHeader from "../../components/pageHeaderContent";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import './style.scss';

import ImageOne from '../../images/bootstrap5_1.jpg';
import ImageTwo from '../../images/bootstrap5_2.jpg';
import ImageThree from '../../images/bootstrap5_3.jpg';
import ImageFour from '../../images/bootstrap5_4.jpg';
import ImageFive from '../../images/bootstrap3_1.jpg';
import ImageSix from '../../images/bootstrap3_2.jpg';


const portfolioData = [
    {
      id: 2,
      name: "Sunny Dental Care",
      image: ImageOne,
      link: "https://sunnydental.us",
    },
    {
      id: 2,
      name: "Center of Orthodontics",      
      image: ImageTwo,
      link: "https://www.centerfororthodontics.com",
    },
    {
      id: 2,
      name: "Fresh Family Dental",
      image: ImageThree,
      link: "https://www.myfreshfamilydental.com",
    },
    {
      id: 2,
      name: "Pediatric Dentistry",
      image: ImageFour,  
      link: "https://www.jpopedsdentistry.com",
    },
    {
      id: 3,
      name: "Smiles of Cary",
      image: ImageFive,
      link: "https://www.smilesofcary.com",
    },

    {
        id: 3,
        name: "Mobile App Development",
        image: ImageSix,
        link: "http://www.android.two-t.com",
      },
    
  ];

const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Bootstrap 5",
    },
    {
      filterId: 3,
      label: "Bootstrap 3",
    },
  ];

const Portfolio = ()=> {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);
  
    function handleFilter(currentId) {
      setFilteredValue(currentId);
    }
  
    function handleHover(index) {
      setHoveredValue(index);
    }
  

  
    const filteredItems =
      filteredvalue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredvalue);
  

    return (
        <>
        <section id="portfolio" className="portfolio">
        <PageHeader 
        heaaderText = "Portfolio" 
        icon =  {<FaLaptopCode size={30} />}
        />
        <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio_content_cards_item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img_wrapper">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noreferrer">
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
        </section>
        </>
    );
};

export default Portfolio;