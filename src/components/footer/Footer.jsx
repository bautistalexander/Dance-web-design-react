import './footer.css';
import { logo } from '../../data/data';

export const Footer = () => {
  return (
    <div className='footer_container'>
      {/* <hr /> */}
      <div className='footer_redes'>
        <i className='bx bxl-whatsapp' ></i>
        <i className='bx bxl-facebook-circle' ></i>
        <i className='bx bxl-youtube' ></i>
        <i className='bx bxl-instagram-alt'></i>
      </div>
      <div className='footer_logo'>
        <img src={logo} />
      </div>
    </div>
  )
}
