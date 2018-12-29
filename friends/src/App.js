import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchFriends, addFriends, deleteFriend, changeName } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      editing: false,
      editFriend: false
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
  editFriend = e => {
    this.setState({ editFriend: true });
  };
  changeName = (id, person) => {
    const editedFriend = {
      name: this.state.name,
      age: this.props.friend.friends[id].age,
      email: this.props.friend.friends[id].email
    };
    this.props.changeName(editedFriend, person);
    this.setState({ editing: false, editFriend: false, name: "" });
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
            {friend.friends.map((person, i) => {
              return (
                <div key={person.id} onClick={this.toggleEdit}>
                  <div>{person.name}</div>
                  {this.state.editing ? (
                    <form>
                      <button onClick={this.editFriend}>Edit</button>
                      {this.state.editFriend ? (
                        <form>
                          <input
                            onChange={this.inputFriends}
                            name="name"
                            value={this.state.name}
                            placeholder="name"
                          />{" "}
                          <button onClick={() => this.changeName(i, person.id)}>Change</button>
                        </form>
                      ) : null}
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
  { fetchFriends, addFriends, deleteFriend, changeName }
)(App);
