import axios from "axios";
import React, { Component } from "react";
import ModalC from "../Modal";

class Scholarship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allScholarships: []
    };
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    axios
      .get("https://testapi.io/api/redealumni/scholarships")
      .then(response => {
        this.setState({
          allScholarships: response.data
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    /*  const list = this.state.allScholarships.map((e, idx) => {
      return <h2 key={idx}> {e.campus.name}</h2>;
    }); */

    console.log("!@!@!@@", this.props.click);
    return (
      <>
        <ModalC
         teste={this.state.allScholarships}
         click={this.props.click}
        />
      </>
    );
  }
}

export default Scholarship;
