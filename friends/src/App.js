import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const { friend } = this.props;
    console.log(friend);
    return (
      <div className="App">
        <h1>Friends</h1>
        {friend.friends.map(person => {
          return <div key={person.id}>{person.name}</div>;
        })}
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
