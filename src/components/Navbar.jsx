import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/preferencesSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.preferences.darkMode);

  return (
    <nav className={darkMode ? 'dark' : ''}>
      <Link to="/">HEM</Link>
      <Link to="/about">OM MIG</Link>
      <Link to="/projects">PROJEKT</Link>
      <Link to="/contact">KONTAKT</Link>
      <button onClick={() => dispatch(toggleDarkMode())}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

