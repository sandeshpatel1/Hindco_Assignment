import React, { useState, useEffect } from 'react';
import './Home.css';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="homepage">
      <div className="slider">
        <div className="arrow left-arrow" onClick={handlePrevSlide}>
          <ChevronLeftCircle />
        </div>
        <div className="slide" style={{ backgroundImage: `url(${images[currentSlide]})` }}>
          <div className="content">
            <h1 className='home-title'>Award Winning Agency</h1>
            <p className='home-para'>Leading the industry with innovative solutions.</p>
            <button className="btn">Begin the Journey</button>
          </div>
        </div>
        <div className="arrow right-arrow" onClick={handleNextSlide}>
          <ChevronRightCircle />
        </div>
        <div className="circles">
          {images.map((image, index) => (
            <div
              key={index}
              className={`circle ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
