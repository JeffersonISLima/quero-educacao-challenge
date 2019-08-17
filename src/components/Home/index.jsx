import "./Home.css";
import React, { Component } from "react";
import Scholarship from "../Scholarship";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggleView: false
    };
    this.modalScholarship = this.modalScholarship.bind(this);
  }

  modalScholarship(e) {
    this.setState({
      toggleView: true
    });
  }

  render() {
    return (
      <>
        <main>
          <h1 className="title">Bolsas favoritas</h1>

          <article className="article">
            <p>
              Adicione bolsas de cursos e faculdades do seu interesse e receba
              atualizações com as melhores ofertas disponíveis.
            </p>
          </article>

          <section className="semester">
            <div className="semester__border semester__first__arrow">
              <p>Todos os semestres</p>
            </div>

            <div className="semester__border">
              <p>2º semestre de 2019</p>
            </div>

            <div className="semester__border">
              <p> 1º semestre de 2020</p>
            </div>
          </section>

          <section>
            <div className="add-scholarship">
              <div className="button" onClick={e => this.modalScholarship(e)}>
                <i className="fas fa-plus" />
                <h2>Adicionar bolsa</h2>
                <p>Clique para adicionar bolsas de cursos do seu interesse</p>
              </div>
            </div>

            <div>
              {
                this.state.toggleView
                ? <Scholarship click={true} />
                : "Sua lista de favoritos aparecerá aqui"
              }
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
