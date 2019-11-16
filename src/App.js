import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './chatwindow.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Default Name"
    }
  }

  componentDidMount() {
  }

  render() {

    return (
    //   <div className="App">
    //   <button type="button" onClick={click => this.onSubmit()}>a button</button>
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1>My name is {this.state.username}</h1>
    //     </header>
    //   </div>
      <div>
        <ChatWindow/>
      </div>
    );
  }

}



export default App;
