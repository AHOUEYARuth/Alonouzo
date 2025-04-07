import React from 'react';
import Carousel2 from "@/assets/img/carousel-2.jpg";

const MarketPlace = () => {
    return (
      <>
        <div
          className="hero_section"
          style={{ backgroundImage: `url(${Carousel2.src})` }}
        >
          <div className="hero_content">
            <h1 className="hero_title">MarketPlace</h1>
            <p className="hero_subtitle">Learn more about our company</p>
          </div>
        </div>
        <div className='py-5'>
          <div className="container">
            <p>Aucun article disponible</p>
          </div>
        </div>
      </>
    );
};

export default MarketPlace;