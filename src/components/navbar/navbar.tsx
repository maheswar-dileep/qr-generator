import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link qr-generator-link">
            QR Generator
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/link-shortener" className="navbar-link link-shortener-link">
            Link Shortener
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
