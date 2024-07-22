import './consult.css';

export const Consult = () => {
  return (
    <div className='consult' id='consult'>
      <div className='consult_left'>
        <hr />
        <div>
          <span>Listo para </span>
          <span className='stroke_text'>iniciar</span>
        </div>
        <div>
          <span className='stroke_text'>Envíanos </span>
          <span >tú correo</span>
        </div>
      </div>
      <div className='consult_right'>
        <form action='' className='email_container'>
          <input type='email' placeholder='Escribe tu correo electrónico' name='user_email'/>
          <button className='btn btn_consult'>enviar</button>
        </form>
      </div>
    </div>
  )
}
