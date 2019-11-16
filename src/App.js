import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Default Name"
    }
  }

  componentDidMount() {
  }

  onSubmit = () => {
    axios.get('http://localhost:8000/cartername')
    .then(res => {
      console.log(res);
      this.setState({ username: res.data.username })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {

    return (
      <div className="App">
      <button type="button" onClick={click => this.onSubmit()}>a button</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My name is {this.state.username}</h1>
        </header>
      </div>
    );
  }

}



export default App;
