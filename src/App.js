import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";

class App extends Component {
  state = {
    users: [],
    searchTerm: "",
  };

  getSearchValue = (search) => {
    this.setState({ searchTerm: search });
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ users: res.data }));
  }
  render() {
    const { users, searchTerm } = this.state;
    const filterUser = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filterUser);
    return (
      <div>
        <Search getSearchValue={this.getSearchValue} />
        <div className="container">
          {filterUser.map((user, index) => (
            <div className="card" key={index}>
              <img
                src={`https://robohash.org/${index}?set=set3`}
                alt="images"
              />
              <div className="username">{user.name}</div>
              <div className="email">{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
