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
}; */

/* Modal.setAppElement('./index.jsx') */

class ModalScholarships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      hasScholarship: false,
      favoritesScholarship: new Map()
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
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      favoritesScholarship: prevState.favoritesScholarship.set(item, isChecked)
    }));
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
    return (
      <>
        <Modal
          ariaHideApp={false}
          contentLabel="List Scholarship"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          /* style={customStyles} */
        >
          <button onClick={this.closeModal}>close</button>
          <h2 >Adicionar bolsa</h2>
          <h2>Filtre e adicione as bolsas de seu interesse.</h2>
          
          <div>
            <h2>SELECIONE SUA CIDADE</h2>
            <select name="" id="">
              <option value="teste">teste</option>
            </select>

            <h2>SELECIONE O CURSO DE SUA PREFERÊNCIA</h2>
            <select name="" id="">
              <option value="">teste</option>
            </select>
          </div>

          <h2>COMO VOCÊ QUER ESTUDAR?</h2>
          <div>
            <label htmlFor="">
              <input type="checkbox" name="Presencial" value="Presencial" id=""/>
              Presencial
            </label>

            <label htmlFor="">
              <input type="checkbox" name="Presencial" value="Presencial" id=""/>
              A distância
            </label>
          </div>

          <h2>ATÉ QUANTO PODE PAGAR?</h2>
          <h3>R$10.000</h3>
          <div>
            <input type="range" name="" id=""/>
          </div>

          <div>
            <h2>Resultado: </h2>
            <h2>Ordenar por </h2>
          </div>

          <div>
            <h2>Nome da faculdade </h2>
          </div>

          <form onSubmit={this.handleSubmit}>
            {
              listOfAllScholarship.map((element, idx) => (
                <div key={idx}>
                  <label>
                    {element.campus.name}
                    <Checkbox
                      type="checkbox"
                      checked={isChecked}
                      name={element.campus.name}
                      value={element.campus.name}
                      onChange={e => this.handleChange(e, idx)}
                    />
                  </label>
                  <br />
                </div>
              ))
            }
            <div>
              <input type="button" value="Cancelar"/>
              <input type="submit" value="Adicionar Bolsa" />
            </div>
          </form>
        </Modal>

        {
          this.state.hasScholarship
           ? this.state.favoritesScholarship
           : null
        }
      </>
    );
  }
}

export default ModalScholarships;
