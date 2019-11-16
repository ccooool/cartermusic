import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import axios from 'axios';

 
class ChatWindow extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  onSubmit = (msg) => {
    axios.post('http://localhost:8000/submit_message', msg)
    .then(res => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  addMessage = (text) => {
    this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
  }

  getMessages = () => {
      axios.get('http://localhost:8000/messages')
      .then(res => {
          var messageList = res.data.list_of_messages;
          // loop through the messages
          var i;
          for (i = 0; i < messageList.length; i++) {
            this.addMessage(messageList[i])
          }
      })
  }
 
  _onMessageWasSent(message) {
    console.log(message)
    this.onSubmit(message);
    this.getMessages();
    console.log(this.state.messageList);
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}


export default ChatWindow;
