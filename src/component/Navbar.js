import './styles/navbar.css';
import {
  NavLink,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="bookstore">
          <h1>Bookstore CMS</h1>
          <NavLink to="/">BOOKS</NavLink>
          <NavLink to="categories">CATEGORIES</NavLink>
        </div>
        <div className="user">
          <FaUser size={21} color="#0290ff" />
        </div>
      </div>
    </nav>
  );
}
