import './participations.css';
import { img_participaciones, participaciones } from '../../data/data';

export const Participations = () => {
  return (
    <div className='participations' id='participations'>
      <div className='blur_left'></div>
      <div className='participations_left'>
        <img src={img_participaciones[0]} />
        <img src={img_participaciones[1]} />
        <img src={img_participaciones[2]} />
        <img src={img_participaciones[3]} />
      </div>

      <div className='participations_right'>
        <span>Participación en varios</span>

        <div>
          <span className='stroke_text'>EVENTOS  </span>
          <span>¡anímate!</span>
        </div>

        <div className='participations_details'>
          {
            participaciones.map((par) => (
              <div key={par}>
                <i className='bx bx-check-circle'></i>
                <span>{par}</span>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}
