import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';

import './Testimonial.scss';
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = `*[_type == "brands"]`;
    const testimonialsQuery = `*[_type == "testimonials"]`;

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    client.fetch(query).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imageurl)}
              alt="testimonials"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);
