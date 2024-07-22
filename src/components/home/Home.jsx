import { Header } from '../header/Header';
import { mensajes, titulo, datos_estadisticos, principal_imagen } from '../../data/data';
import './home.css';


export const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='blur_left'></div>
        <div className='left_home'>
          <Header />
          
          <div className='home_the_best_ad'>
            <div></div>
            <span>{mensajes.mensaje1}</span>
          </div>

          <div className='home_title'>
            <div>
              <span className='stroke_text'>{titulo.linea1} </span>
              <span>{titulo.linea2}</span>
            </div>
            <div>
              <span>{titulo.linea3}</span>
            </div>
            <div>
              <span>{titulo.descripcion}</span>
            </div>
          </div>

          <div className='home_figures'>
            <div>
              <span>+{datos_estadisticos.dato1[1]}</span>
              <span>{datos_estadisticos.dato1[0]}</span>
            </div>
            <div>
              <span>+{datos_estadisticos.dato2[1]}</span>
              <span>{datos_estadisticos.dato2[0]}</span>
            </div>
            <div>
              <span>+{datos_estadisticos.dato3[1]}</span>
              <span>{datos_estadisticos.dato3[0]}</span>
            </div>
          </div>

          <div className='home_buttons'>
            <button className='btn'>Iniciar Sesión</button>
            <button className='btn'>Aprende más</button>
          </div>
        </div>
        <div className='right_home'>
          <button className='btn'>Registrarse</button>
          <img className='home_image' src={principal_imagen} />

          <div className='home_offer'>
            <span className=''>DESCUENTO</span>
            <span className='stroke_text'>20%</span>
            <span className=''>APROVECHA</span>
          </div>
        </div>

      </div>
    </>
  )
}
