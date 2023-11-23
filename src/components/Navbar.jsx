import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/product/ProductContext";

const Navbar = () => {
  const {items} = useContext(ProductContext)
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">My.Store</h1>
      </Link>
      <ul className="nav-links">
        <li className="category">Electronics</li>
        <li className="category">Jewelery</li>
        <li className="category">Men's Clothing</li>
        <li className="category">Women's Clothing</li>
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
