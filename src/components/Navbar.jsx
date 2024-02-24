import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/product/ProductContext";

const Navbar = () => {
  const {items} = useContext(ProductContext)
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">My.Store(at)</h1>
      </Link>
      <ul className="nav-links">
        <Link to='/card/electronics'><li className="category">Electronics</li></Link>
        <Link to='/card/jewelery'><li className="category">Jewelery</li></Link>
        <Link to="/card/men's clothing"><li className="category">Men's Clothing</li></Link>
        <Link to="/card/women's clothing"><li className="category">Women's Clothing</li></Link>
        <li>
          <Link to="/cart" className="cart">
            Cart ({items.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
