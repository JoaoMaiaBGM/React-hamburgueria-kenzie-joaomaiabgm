import logo from "../../assets/logo-kenzie-burguer.png";

import "./styles.css";

const Header = ({ children }) => {
  return (
    <header className="headerContainer">
      <div className="headerLogo">
        <img src={logo} alt="Logo Kenzie Burguer" />
      </div>
      {children}
    </header>
  );
};

export default Header;
