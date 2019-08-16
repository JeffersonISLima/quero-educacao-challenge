import "./Navbar.css";
import React from "react";
import "../../stylesheet-components/css/settings/color.css";

const Navbar = () => {
  const image = (
    <img
      className="img"
      src="../images/icon-education.png"
      alt="Education icon color yellow"
    />
  );

  return (
    <>
      <nav className="border">
        <div className="container-first-part-nav-bar">
          <div className="first-column border">
            <div className="navbar-icon-circle">
              <i className="fas fa-info" />
            </div>
            <h2>Ajuda</h2>
          </div>

          <div className="second-column border">
            {image}
            <h2>
              QUERO <span>BOLSA</span>
            </h2>
          </div>

          <div className="third-column border">
            <i className="far fa-user-circle" />
            <h2>Conta</h2>
          </div>
        </div>

        <div>
          <h2>Minha conta</h2>
          <h2>Menu </h2>
          <i className="fas fa-chevron-down" />
        </div>

        <div>
          <i className="fas fa-chevron-left" />
          <h2>Minha conta</h2>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
