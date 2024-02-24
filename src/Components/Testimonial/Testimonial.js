import React, { useState } from "react";
import './Testimonial.css'; // Import CSS for styling
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "Anna Smith",
      role: "Product manager",
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "Emily Johnson",
      role: "Marketing Specialist",
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "John Doe",
      role: "Software Engineer",
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "SLorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "Jessica Williams",
      role: "UI/UX Designer",
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "Michael Brown",
      role: "Business Analyst",
    },
    {
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.",
      author: "Sarah Taylor",
      role: "HR Manager",
    },
  ];


  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + testimonials.length) % testimonials.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 2) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-slider">
        {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              className="testimonial-img"
              alt="testimonial avatar"
            />
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-arrows">
                {index === 0 && (
                  <button className="testimonial-arrow prev" onClick={handlePrevSlide}>
                    <ChevronLeftCircle/>
                  </button>
                )}
                {index === 1 && (
                  <button className="testimonial-arrow next" onClick={handleNextSlide}>
                    <ChevronRightCircle/>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-circles">
        {testimonials.slice(0, 3).map((_, index) => (
          <div
            key={index}
            className={`testimonial-circle ${index === currentSlide / 2 ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index * 2)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;