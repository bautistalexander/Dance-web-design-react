import './header.css';
import { logo } from '../../data/data';

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className='header_logo'/>
      <ul className='header_menu'>
        <li>Principal</li>
        <li>Programas</li>
        <li>Nosotros</li>
        <li>Ofertas</li>
        <li>Testimonios</li>
      </ul>
    
    </div>

  )
}
