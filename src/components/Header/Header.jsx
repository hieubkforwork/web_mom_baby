import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          MyWebsite
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About Us
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Service
          </NavLink>
          <NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Booking
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

