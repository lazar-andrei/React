import React from "react";
import base from "../base";
import firebase from 'firebase';
import SendMessage from "./SendMessage";
import MessageList from "./MessageList";
import logocropped from "../assets/logo-cropped.png";
import {animateScroll} from "react-scroll";

class App extends React.Component{

  state={
    messages:[]
  }

  componentDidMount(){
    this.ref = base.syncState('messages',{
      context:this,
      state : 'messages',
      asArray : true
    })

    setTimeout(()=> this.scrollToBottom(), 1000);
    
  }
  componentDidUpdate(){
    this.scrollToBottom();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  onSubmitMessage =(value)=>{
    
    console.log('a fost trimis un mesaj');
    const message={
      id: Math.random().toString(16),
      owner: this.props.user.username,
      text: value,
    }
    this.setState({
      messages:[
        ...this.state.messages,
        message
      ]
    });
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "messageList"
    });
  }

  handleLogout = async () => {
    console.log('Logging out!');
    await firebase.auth().signOut();
    this.props.onLogout();
    this.props.history.push('/');
  }

  

  render(){
    return(
      <div className="app-container">
        <header className="app-header">
          <img src={logocropped} alt="logo" height="55px"></img>
          <div className="logout-container">
           <button className="logout" onClick={this.handleLogout}>Log out</button>
           <h3> Signned is as: <b> {this.props.user.username}</b></h3>
          </div>
        </header>
        <MessageList user={this.props.user} messages={this.state.messages}/>
      
        <SendMessage onSubmitMessage={this.onSubmitMessage}/>
      </div>
    )
  }
}
export default App;
