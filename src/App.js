
import React, { Component } from 'react';
import Navbar from "./components/_navbar.js";
import Footer from "./components/_footer.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      repo: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/orgs/camunda/repos")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });

    fetch("https://api.github.com/orgs/camunda")
      .then(res => res.json())
      .then(json => {
        this.setState({
          repo: json,
          isLoaded: true,
        });
        console.log(json);
      });
  }

  render() {
    var { isLoaded, items, repo } = this.state;

    if (!isLoaded)
      return <div className="text-center"> Loading...</div>
    else
      return (
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <div className="row col-md-12 well">
              <h3>{repo.name}</h3>
              <li><a>{repo.location}</a></li>
              <li><a>{repo.blog}</a></li>
              <li><a>{repo.email}</a></li>
              
            </div>

            <h5>All repositories</h5>
            <div className=".blocos">
              {items.map(i => {
                return <div className="well" key={i.id}><p>{i.name}</p><p>{i.description}</p><li><a>{i.language}</a></li>
                  <li><a>{i.stargazers_count}</a></li>
                  <li><a>{i.forks}</a></li></div>
              })}
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
  }
}

export default App;
