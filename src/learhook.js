import React, { cloneElement } from "react";
import logo from "./logo.svg";
// import axios from 'axios';
import "./App.css";
class Learnhook extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0
    };
  }
  handleCount = () => {
      this.setState({
    count: this.state.count + 1


      })
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCount}>click me{this.state.count}</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
export default Learnhook;
