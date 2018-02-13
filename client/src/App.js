import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
      this.callApi()
        .then((res) => {
          this.setState({
            response: res.express
          });
        })

        .catch((error) => {
          console.log(error);
        });
  }

  callApi = async () => {
      const response = await fetch('/home');
      const body = await response.json();

      if(response.status !== 200) throw Error(body.message);

      return body;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Node Blog System</h1>
        </header>
        <div>
          <Button color="home">Home</Button>{' '}
          <Button color="about">About</Button>{' '}
          <Button color="addPost">Add Post</Button>{' '}
        </div>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
