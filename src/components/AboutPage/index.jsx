import Header from "../Header";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import Footer from "../Footer";

import "./style.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="main-about">
        <Sidebar />
        <Navigation />

        <div className="content-container">
          <h1 className="title">Sobre a Burguer Kenzie</h1>
          <p className="content">
            A Burguer Kenzie foi um projeto concebido dentro do escopo do curso
            de desenvolvimento web da instituição Kenzie Academy Brasil. Sendo
            finalizado em 22/07/2022, o projeto teve como intuito a construção
            de uma aplicação voltada para um e-commerce de alimentos, uma
            lanchonete.
            <br /> <br />
            O objetivo foi desenvolver a Burguer Kenzie baseando-se no que
            tínhamos aprendido em React até o momento, como também aperfeiçoar
            as habilidades de estilização. <br /> <br />
            Para tanto, tivemos algumas metas a serem cumpridas. Estas metas
            foram:
          </p>
          <ul className="content-list">
            <li className="content-item">
              1. Acessar a API
              <a
                className="content-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
              >
                Burguer Kenzie
              </a>
              ;
            </li>
            <li className="content-item">2. Simular um carrinho de compras;</li>
            <li className="content-item">
              3. Seguir o layout do
              <a
                className="content-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/file/Nx4WZEFXnHzeFsxRaw8y18/M3---1B07---Entrega---Hamburgueria-da-Kenzie?type=design&node-id=0-1&mode=design"
              >
                FIGMA
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
