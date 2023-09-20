import { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import NavItems from "../../utils/sidebar/navItems";

import "./style.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburguerMenu = GiHamburgerMenu();
  const closeMenu = GrClose();

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-container">
        <header className="sidebar-header">
          <button
            className="sidebar-burguer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? closeMenu : hamburguerMenu}</span>
          </button>
        </header>
        <nav className="sidebar-menu">
          {NavItems.map((item) => (
            <Link to={`/${item.name}`} key={item.id} className="sidebar-button">
              <span className="button-image">{item.image}</span>
              <p className="button-name">{item.name}</p>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
