import './styles/navbar.css';
import {
  NavLink,
} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Book</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </nav>
  );
}
