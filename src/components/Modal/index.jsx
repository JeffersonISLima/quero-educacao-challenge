import "./Modal.css";
import Modal from "react-modal";
import Checkbox from "../Checkbox";
import React, { Component } from "react";

/* const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};  */

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
      filtered: {},
      modalIsOpen: true,
      hasScholarship: false,
      favoritesScholarship: [],
      buttonAddScholarship: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      target: { name, isChecked, value }
    } = event;

    const scholarshipsFavorite = this.props.scholarships.filter(
      (element, idx) => {
        return element.full_price.toString().includes(name);
      }
    );
    this.setState({
      filtered: scholarshipsFavorite,
      buttonAddScholarship: true,
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

  componentWillReceiveProps() {
    this.openModal();
  }

  render() {
    const { isChecked } = this.state;
    const listOfAllScholarship = [...this.props.scholarships];

    const lista = [...listOfAllScholarship]


    const images = ['foo', 'bar', 'foo', 'bar', 'bach', 'bach', 'cafe'];
    
    const filteredImages = images.filter((exam, idx) => images.indexOf(exam) === idx);     

    console.log('retornado', filteredImages); 

    console.log("JA TEMMMMMMMMMMMM", lista);
    

    let campu = lista.filter((e, idx) => console.log(

      lista.indexOf(e.campus.city) === idx) 
      )

    console.log('campusCityFiltereds', campu);
    

    return (
      <>
        <Modal
          ariaHideApp={false}
          contentLabel="List Scholarship"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
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
                
                 <option value={filteredImages}>{filteredImages}</option>
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
              <label id="teste" htmlFor="">
                <input
                  type="checkbox"
                  name="Presencial"
                  value="Presencial"
                  id=""
                />
                <span className="location-of-study">Presencial</span>
              </label>

              <label htmlFor="">
                <input
                  type="checkbox"
                  name="Presencial"
                  value="Presencial"
                  id=""
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
                    <img src={element.university.logo_url} alt="" />
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
                className="btn-cancel"
                type="button"
                value="Cancelar"
                onClick={this.closeModal}
              />
              {this.state.buttonAddScholarship ? (
                <input
                  className="bnt-submit"
                  type="submit"
                  value="Adicionar bolsa&#40;s&#41;"
                />
              ) : (
                <input
                  className="bnt-submit-disabled"
                  type="submit"
                  value="Adicionar bolsa&#40;s&#41;"
                  disabled
                />
              )}
            </div>
          </form>
        </Modal>

        {this.state.hasScholarship
          ? this.state.filtered.map(e => {
              return e.campus.name + e.full_price;
            })
          : null}
      </>
    );
  }
}

export default ModalScholarships;
