import React, { Component } from "react";
import Navbar from "./navbar";
import Search from "./Search";
import Date from "./Date";
class Counters extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        {/*   <Date /> */}
        <Search />
      </div>
    );
  }
}

export default Counters;
