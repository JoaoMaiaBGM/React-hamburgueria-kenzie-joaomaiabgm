import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import NavItems from "../../utils/navItems";

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
            <button className="sidebar-button" key={item.id}>
              <span>{item.image}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
