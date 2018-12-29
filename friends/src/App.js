import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    console.log("this.props is: ", this.props);
    return (
      <div className="App">
        <h1>Friends</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friend: state
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
