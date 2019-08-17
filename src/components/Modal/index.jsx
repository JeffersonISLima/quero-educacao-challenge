import React from "react";
import Modal from "react-modal";

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

class ModalC extends React.Component {
  constructor(props) {
    super(props);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@", this.props.click);
    this.state = {
      modalIsOpen: true,
      favorites: []
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(click) {
    console.log("CLIQUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", click);

    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  componentWillReceiveProps() {
    this.openModal(this.props.click);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button>  */}

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          /* style={customStyles} */
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Lista</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          {this.props.teste.map((e, idx) => {
            console.log("%%%%%%%%%%%", e.campus.name);

            return (
              <div key={idx}>
                <input type="checkbox" />
                <p>{e.campus.name}</p>
              </div>
            );
          })}
        </Modal>

        <h1>Aqui lista</h1>
      </div>
    );
  }
}

export default ModalC;
