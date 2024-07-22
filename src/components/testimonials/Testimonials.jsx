import { useState } from 'react';
import { testimonios } from '../../data/data';
import './testimonials.css';

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const lengthTestimonials = testimonios.length;

  const handleAddIndex = () => {
    if (index < lengthTestimonials - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleRestIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(lengthTestimonials - 1);
    }
  };

  return (
    <div className='testimonials' id='testimonials'>
      <div className='blur_left'></div>
      <div className='testimonials_left'>
        <span>Testimonios</span>
        <span className='stroke_text'>de Nuestros</span>
        <span>estudiantes e Intructores</span>

        <span>{testimonios[index].comentario}</span>
        <span>
          <span>{testimonios[index].nombre} </span>
           - {testimonios[index].rol}
        </span>

      </div>
      <div className='testimonials_right'>
        <div></div>
        <div></div>
        <img src={testimonios[index].imagen} />
        <div className='testimonials_arrows'>
          <i className='bx bx-left-arrow-alt' onClick={() => handleRestIndex()}></i>
          <i className='bx bx-right-arrow-alt' onClick={() => handleAddIndex()}></i>
        </div>
      </div>
    </div>
  )
}
