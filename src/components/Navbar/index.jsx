import "./Navbar.css";
import React from "react";
import "../../stylesheet-components/css/settings/color.css";

const Navbar = () => {
  const image = (
    <img
      className="img"
      alt="Education icon color yellow"
      src="../images/icon-education.png"
    />
  );

  return (
    <>
      <nav>
        <div className="container-first-part-nav-bar">
          <div className="first-column">
            <div className="navbar-icon-circle">
              <i className="fas fa-info" />
            </div>
            <h2 className='nav-font-settings'>Ajuda</h2>
          </div>

          <div className="second-column">
            {image}
            <div className="second-column__items">
              <h2>
                QUERO <span>BOLSA</span>
              </h2>
            </div>
          </div>

          <div className="third-column nav-font-settings">
            <i className="far fa-user-circle icon-user-account" />
            <h2 className='nav'>Conta</h2>
          </div>
        </div>

        <div className="container-second-part-nav-bar">
          <h2>Minha conta</h2>
          <div className="menu">
            <h2>Menu </h2>
            <i className="fas fa-chevron-down" />
          </div>
        </div>

        <div className="container-third-part-nav-bar">
          <i className="fas fa-chevron-left" />
          <h2>Minha conta</h2>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
