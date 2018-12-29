import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchFriends, addFriends, deleteFriend } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      editing: false
    };
  }
  componentDidMount() {
    this.props.fetchFriends();
  }
  inputFriends = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addFriends = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.setState({ name: "", age: "", email: "" });
    this.props.addFriends(newFriend);
  };
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };
  render() {
    const { friend } = this.props;
    console.log(friend);
    return (
      <div className="App">
        <h1>Friends</h1>
        {friend.fetching ? (
          <p>Fetching...</p>
        ) : (
          <div>
            {friend.friends.map(person => {
              return (
                <div key={person.id} onClick={this.toggleEdit}>
                  <div>{person.name}</div>
                  {this.state.editing ? (
                    <form>
                      <button>Edit</button>
                      <button onClick={() => this.props.deleteFriend(person.id)}>Delete</button>
                    </form>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}

        <form>
          <input
            value={this.state.name}
            onChange={this.inputFriends}
            name="name"
            placeholder="Name"
          />
          <input value={this.state.age} onChange={this.inputFriends} name="age" placeholder="Age" />
          <input
            value={this.state.email}
            onChange={this.inputFriends}
            name="email"
            placeholder="Email"
          />
          <button onClick={this.addFriends}>Add Friend</button>
        </form>
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
  { fetchFriends, addFriends, deleteFriend }
)(App);
