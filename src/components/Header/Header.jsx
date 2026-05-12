import logo from "../../assets/logo.png";
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} />
        <span>Bike Store</span>
      </div>
      <Nav />
    </header>
  );
};
