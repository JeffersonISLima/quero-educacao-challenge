import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <h1>Bolsas favoritas</h1>

        <article>
          <p>
            Adicione bolsas de cursos e faculdades do seu interesse e receba
            atualizações com as melhores ofertas disponíveis.
          </p>
        </article>

        <section>
          <div className="border">
            <p>Todos os semestres</p>
          </div>

          <div className="border">
            <p>2º semestre de 2019</p>
          </div>

          <div className="border">
            <p> 1º semestre de 2020</p>
          </div>

          <div className="border">
            <i className="fas fa-plus" />
            <h2>Adicionar bolsa</h2>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
