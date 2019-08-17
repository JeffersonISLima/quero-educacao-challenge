import axios from "axios";
import React, { Component } from "react";
import ModalScholarships from "../Modal";

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
    return (
      <>
        <ModalScholarships
          scholarships={this.state.allScholarships}
        />
      </>
    );
  }
}

export default Scholarship;
