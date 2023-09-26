import { Link } from "react-router-dom";

import NavItems from "../../utils/sidebar/navItems";

import "./style.css";

const Navigation = () => {
  return (
    <nav className="crumbs">
      <ol className="crumbs-list">
        {NavItems.map((item) => (
          <Link to={`/${item.name}`} key={item.id} className="crumb">
            <span className="crumb-image">{item.image}</span>
            <p className="crumb-name">{item.name}</p>
          </Link>
        ))}
      </ol>
    </nav>
  );
};

export default Navigation;
