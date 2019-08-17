import axios from "axios";
import React, { Component } from "react";

class Scholarship extends Component {
  constructor(props) {
    super(props);
    console.log("PROPSSSSSSSSSSSSSSSSSS", this.props.click);
    
    this.state = {
      showView: true,
      allScholarships: []
    };
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    axios.get("https://testapi.io/api/redealumni/scholarships")
      .then(response => {
        // console.log(response.data[0].campus.name);
        this.setState({
          allScholarships: response.data,
          showView: this.props.click,
        });
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.state.showView);
        
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    console.log(
      "oii",
      this.state.allScholarships.map(e => {
        return e.campus.name;
      })
    );

    if (this.state.showView) {
      console.log("%%%%%%%%%%%%%",this.state.showView);      
      return (
        <>
          {this.state.allScholarships.map((e, idx) => {
            return <h2 key={idx}> {e.campus.name}</h2>;
          })}
        </>
      );
    } else return null;
  }
}

export default Scholarship;
