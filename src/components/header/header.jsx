import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import  useStore  from '../../store/globalStore'; // Zustand store
import Logo from '../../assets/Homitech.png'

const Header = () => {
  const cartItems = useStore((state) => state.cartItems);
  const favorites = useStore((state) => state.favorites);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Homitech Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/categories">Categorías</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Icons */}
        <div className="icons">
          <Link to="/favorites" className="icon-container">
            <FontAwesomeIcon icon={faHeart} />
            {favorites.length > 0 && <span className="icon-badge">{favorites.length}</span>}
          </Link>
          <Link to="/cart" className="icon-container">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems.length > 0 && <span className="icon-badge">{cartItems.length}</span>}
          </Link>
          <div className="icon-container user-icon">
            <FontAwesomeIcon icon={faUser} />
            <div className="user-dropdown">
              <Link to="/profile">Perfil</Link>
              <Link to="/login">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
