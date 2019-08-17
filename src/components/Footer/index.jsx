import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="background-color">
        <div className="whats-app">
          <i className="fab fa-whatsapp" />
          <div>
            <h2>0800 123 2222</h2>
            <h2>Segunda a sexta de 8h às 22h</h2>
          </div>
        </div>

        <div className="row font-white">
          <div className="contacts icons-size">
            <i className="far fa-comments" />
            <h2>Chat</h2>
          </div>

          <div className="email contacts icons-size">
            <i className="far fa-envelope" />
            <h2>E-mail</h2>
          </div>

          <div className="contacts">
            <div className="border-info ">
              <i className="fas fa-info" />
            </div>
            <h2>Ajuda</h2>
          </div>
        </div>

        <h2 className="font-white made-with-heart">
          Feito com <i className="far fa-heart" /> pela Quero Educação
        </h2>
      </section>
    </>
  );
};

export default Footer;
