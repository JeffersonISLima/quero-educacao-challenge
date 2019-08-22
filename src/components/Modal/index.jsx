import "./Modal.css";
import Modal from "react-modal";
import Checkbox from "../Checkbox";
import React, { Component } from "react";

const customStyles = {
  overlay: {
    opacity: "0.88",
    backgroundColor: "#1F2D30"
  }
};

class ModalScholarships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      hasScholarship: false,
      scholarshipsSelected: [],
      favoritesScholarship: [],
      scholarshipIsEnabled: null,
      buttonAddScholarship: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavoritesScholarship = this.handleFavoritesScholarship.bind(this);
  }

  /* Modal */
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  /* -------- */

  handleChange(event) {
    const {
      target: { name }
    } = event;

    const scholarshipsSelected = this.props.scholarships.filter(
      (element) => {
        return element.full_price.toString().includes(name);
      }
    );

    this.setState({
      buttonAddScholarship: true,
      scholarshipsSelected: scholarshipsSelected,
      scholarshipIsEnabled: scholarshipsSelected[0].enabled,
      favoritesScholarship: this.state.favoritesScholarship + name + ","
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      modalIsOpen: false,
      hasScholarship: true
    });
  }

  handleFavoritesScholarship() {
    this.setState({
      hasScholarship: false,
    })
  }


  UNSAFE_componentWillReceiveProps() {
    this.openModal();
  }

  render() {
    const { isChecked } = this.state;
    const { scholarshipIsEnabled } = this.state;
    const listOfAllScholarship = [...this.props.scholarships];

    return (
      <>
        <Modal
          ariaHideApp={false}
          style={customStyles}
          contentLabel="List Scholarship"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
        >
          <div className="close-modal-btn">
            <h1>
              <span onClick={this.closeModal}>X</span>
            </h1>
          </div>

          <div className="section-options margin-bottom-10px">
            <h2 className="title-add-scholarship">Adicionar bolsa</h2>
            <h2 className="subtitle-add-scholarship">
              Filtre e adicione as bolsas de seu interesse.
            </h2>

            <div>
              <h2 className="select-texts">SELECIONE SUA CIDADE</h2>
              <select className="margin-top-10px " name="">
                {
                  listOfAllScholarship.map((cityName, idx) => {
                    return <option key={idx} value={cityName.campus.city}>{cityName.campus.city}</option>
                  })
                }
              </select>

              <h2 className="select-texts">
                SELECIONE O CURSO DE SUA PREFERÊNCIA
              </h2>
              <select className="margin-top-10px margin-bottom-10px" name="" >
                {
                  listOfAllScholarship.map(((e, idx) => {
                    return <option key={idx} value={e.course.name}>{e.course.name}</option>
                  }))
                }
              </select>
            </div>

            <h2 className="margin-top-10px">COMO VOCÊ QUER ESTUDAR?</h2>
            <div className="margin-top-10px">
              <label id="teste">
                <input
                  type="checkbox"
                  name="Presencial"
                  value="Presencial"
                />
                <span className="location-of-study">Presencial</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="Presencial"
                  value="Presencial"
                />
                <span className="location-of-study">A distância</span>
              </label>
            </div>

            <h2 className="margin-top-10px margin-bottom-10px">
              ATÉ QUANTO PODE PAGAR?
            </h2>
            <h3>R$10.000</h3>
            <div className="margin-top-10px">
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="result-of-the-search margin-bottom-10px">
            <h2>Resultado: </h2>
            <h2>Ordenar por </h2>
          </div>

          <div className="college-name margin-bottom-10px">
            <h2>
              Nome da faculdade <i className="fas fa-chevron-down" />{" "}
            </h2>
          </div>

          <form onSubmit={this.handleSubmit}>
            {listOfAllScholarship.map((element, idx) => (
              <div key={idx}>
                <label className="cards-row">
                  <div className="column-checkbox">
                    <Checkbox
                      type="checkbox"
                      checked={isChecked}
                      name={element.full_price}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>

                  <div className="column-image">
                    <img src={element.university.logo_url} alt={element.university.logo_url} />
                  </div>

                  <div className="column-scholarship-value">
                    <h2 className="course-name">
                      <span>{element.course.name}</span>
                    </h2>
                    <h2 className="course-level">{element.course.level}</h2>
                    <div>
                      <h2 className="course-percentage-value">
                        <span>
                          Bolsa de{" "}
                          <span>
                            {element.discount_percentage}% R${" "}
                            {element.price_with_discount}/mês
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </label>
                <br />
              </div>
            ))}
            <div className="container-bnt">
              <input
                type="button"
                value="Cancelar"
                className="btn-cancel"
                onClick={this.closeModal}
              />
              {
                this.state.buttonAddScholarship
                  ? (<input
                    type="submit"
                    className="bnt-submit"
                    value="Adicionar bolsa&#40;s&#41;"
                  />
                  )
                  : (<input
                    type="submit"
                    className="bnt-submit-disabled"
                    value="Adicionar bolsa&#40;s&#41;"
                    disabled
                  />
                  )
              }

            </div>
          </form>
        </Modal>

        {
          this.state.hasScholarship
            ? this.state.scholarshipsSelected.map((e, idx) => {
              return (
                <div key={idx} className="container-favorites-scholarships">
                  <img src={e.university.logo_url} alt={e.university.logo_url} />
                  <h4 className="university-name">{e.university.name}</h4>
                  <h4 className="course-name">{e.course.name}</h4>
                  <div className="university-score">
                    {
                      e.university.score >= 4
                        ?
                        <>
                          <h4>{e.university.score}</h4>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star"></span>
                        </>
                        :
                        <>
                          <h4>{e.university.score}</h4>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star checked-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </>
                    }
                  </div>

                  <div className="container-course-kind">
                    <div>
                      <h4>{e.course.kind.toUpperCase()}</h4>
                      <div className="container-course-kind__ball"></div>
                      <h4>{e.course.shift.toUpperCase()}</h4>
                    </div>
                    <h4>Início das aulas em: {e.start_date}</h4>
                  </div>

                  {
                    scholarshipIsEnabled
                      ? 
                        <>
                          <h4 className="course-price-title">Mensalidade com o Quero Bolsa:</h4>
                          <h4 className="course-price-full-price">R$ {e.full_price.toString().replace(/['.']/g, ',')}</h4>
                          
                          <div className="container-prices">
                          <h4 className="price_with_discount">R$ {e.price_with_discount.toString().replace(/['.']/g, ',')}</h4>
                          <h4> /mês</h4>
                          </div>

                          <div className="container-bnt">
                          <input
                            type="button"
                            value="Excluir"
                            className="btn-cancel"
                            onClick={this.handleFavoritesScholarship}
                            />
                          {
                            this.state.buttonAddScholarship
                              ? 
                                (<input
                                  type="submit"
                                  className="bnt-submit"
                                  value="Ver oferta"
                                  />
                                  )
                              : 
                                (<input
                                  type="submit"
                                  className="bnt-submit-disabled"
                                  value="Indisponível"
                                  disabled
                                  />
                                  )
                          }
                          </div>
                        </>
                      : 
                        <>
                          <h4 style={{fontSize: '1em'}} className="course-price-title">Bolsa indisponível</h4>
                          <p>
                            Entre em contato com nosso atendimento para saber mais.
                          </p>
                          <div style={{marginTop: '30px'}} className="container-bnt">
                            <input
                              type="button"
                              value="Excluir"
                              className="btn-cancel"
                              onClick={this.handleFavoritesScholarship}
                              />

                            <input
                              type="submit"
                              value="Indisponível"
                              className="bnt-submit-disabled"
                              disabled
                            />
                          </div>
                        </>
                  }
                </div>
              )
            })
            : null
        }
      </>
    );
  }
}

export default ModalScholarships;
