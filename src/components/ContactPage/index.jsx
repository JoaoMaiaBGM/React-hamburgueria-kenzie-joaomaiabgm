import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import { MdMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./style.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="contact-container">
          <div className="title-container">
            <h1 className="title">Como você prefere falar com a gente?</h1>
          </div>
          <ul className="contact-info-list">
            <li className="contact-item">
              <MdMail className="contact-item-icon" />
              <h4 className="contact-item-title">E-mail</h4>
              <p className="contact-item-info">Precisa entrar em contato</p>
              <span className="contact">joaocarlosbgm@gmail.com</span>
            </li>
            <li className="contact-item">
              <BsTelephoneFill className="contact-item-icon" />
              <h4 className="contact-item-title">Telefone</h4>
              <p className="contact-item-info">
                Horário de atendimento:
                <br /> 08:00 às 16:00
              </p>
              <span className="contact">+55 (81) 99722-5274</span>
            </li>
            <li className="contact-item">
              <IoLogoWhatsapp className="contact-item-icon" />
              <h4 className="contact-item-title">Whatsapp</h4>
              <p className="contact-item-info">
                Fale conosco também <br /> pelo Whatsapp
              </p>
              <a
                className="contact whatsapp"
                href="https://web.whatsapp.com/send?phone=5581997225274"
                target="_blank"
                rel="noreferrer"
              >
                +55 (81) 99722-5274
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
