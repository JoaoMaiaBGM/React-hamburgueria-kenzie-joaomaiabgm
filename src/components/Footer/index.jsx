import "./styles.css";
import { BsGithub } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerItemsContainer">
          <a
            href="https://github.com/JoaoMaiaBGM/React-hamburgueria-kenzie-joaomaiabgm"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="footerItemsImage" />
            Repositório do projeto
          </a>

          <a
            href="https://portfolio-ecru-one-30.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <CgProfile className="footerItemsImage" /> Portfólio
          </a>
        </div>
        <p>&copy; - Todos os direitos reservados.</p>
      </div>
    </>
  );
};
