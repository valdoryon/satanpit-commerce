import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components-routes';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div style={{ display: 'flex', alignContent: 'center' }}>
        <a
          onClick={(e) => {
            if (window.scrollY === 0) return;
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
          className='brand-logo'
          href='/'
        >
          Satan's Pit
          <img className='commerce-logo' src='/icons/commerce-logo.svg' />
        </a>
      </div>
      <div className='navbar-links'>
        <Link className='nav-link' to={'/search/hombre'}>
          Men
        </Link>
        <Link className='nav-link' to={'/search/mujer'}>
          Woman
        </Link>
        <Link to={'/cart'}>
          <FiShoppingCart size={20} style={{ cursor: 'pointer' }} />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
