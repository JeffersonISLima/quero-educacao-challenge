import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <i className="fab fa-whatsapp" />
        <h2>0800 123 2222</h2>
        <h2>Segunda a sexta de 8h às 22h</h2>
      </div>

      <div className="row">
        <div>
          <i className="far fa-comments" />
          <h2>Chat</h2>
        </div>

        <div>
          <i className="far fa-envelope" />
          <h2>E-mail</h2>
        </div>

        <div className="navbar-icon-circle">
          <i className="fas fa-info" />
        </div>
        <h2>Ajuda</h2>
      </div>

      <h2>
        Feito com <i className="far fa-heart" /> pela Quero Educação
      </h2>
    </>
  );
};

export default Footer;
