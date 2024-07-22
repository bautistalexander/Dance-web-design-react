import { datos_programas } from '../../data/data';
import { image_programs } from '../../data/image_svg';
import './programs.css';

export const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className='blur_right'></div>
      <div className='programs_title'>
        <span className='stroke_text'>Mira los</span>
        <span>Programas</span>
        <span className='stroke_text'>que te ofrecemos</span>
      </div>

      <div className='programs_body'>
        {
          datos_programas.map((program) => (
            <div key={program.id} className='programs_program'>
              <div>
                {image_programs[program.id - 1]}
                <span>{program.nombre_programa}</span>
              </div>
              <span>{program.descripcion}</span>
              <div className='programs_program-join'>
                <span>Unirme ahora</span>
                <i className='bx bx-right-arrow-alt programs_programs-join-icon'></i>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
