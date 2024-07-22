import './offers.css';
import '../programs/programs.css';
import { ofertas_curso } from '../../data/data';
import { image_programs } from '../../data/image_svg';

export const Offers = () => {
  return (
    <div className='offers_container'>
      <div className='blur_right'></div>
      <div className='offers_title'>
        <span>Listo para dar</span>
        <span className='stroke_text'>tus primeros pasos</span>
        <span>bailando</span>
      </div>

      <div className='offers'>
        {
          ofertas_curso.map((offer) => (
            <div className='offer' key={offer.id_svg}>
              {image_programs[offer.id_svg - 1]}
              <span>{offer.nombre_curso}</span>
              <span >Bs. {offer.precio}</span>
              <div className='features'>
                {
                  offer.caracteristicas.map((f) => (
                    <div key={f}>
                      <i className='bx bx-check' ></i>
                      <span>{f}</span>
                    </div>
                  ))
                }
              </div>
              <div>
                <span>Ver más características</span>
                <i className='bx bx-right-arrow-alt' ></i>
              </div>
              <button className='btn offer_btn'>inscribirme</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
