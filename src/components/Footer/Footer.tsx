import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__info-section'>
        <span>
          © 2024. Todos los derechos reservados. <br />
          {'< Made in Buenos Aires, Argentina >'}
        </span>
        <h2>Satan's Pit</h2>
        <form className='footer__form'>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Email' />
          <button className='button main-button' type='submit'>
            Suscribete
          </button>
        </form>
      </div>
      <div className='footer__info-section'>
        <h3>Sobre nosotros</h3>
        <a href='/'>Ventas Corporativas</a>
        <a href='/'>Locales</a>
        <a href='/'>FAQ</a>
      </div>
      <div className='footer__info-section'>
        <h3>Contacto</h3>
        <a href='/'>Atención al cliente</a>
        <a href='/'>Trabaja con nosotros</a>
        <a href='/'>Newsletter</a>
      </div>
      <div className='footer__info-section'>
        {' '}
        <h3>Seguinos</h3>
        <a href='/'>
          <FiFacebook size={20} /> Facebook
        </a>
        <a href='/'>
          <FiInstagram size={20} /> Instagram
        </a>
        <a href='/'>
          <FiTwitter /> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
