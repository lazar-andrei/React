import React from "react";
import logo from "../assets/logo.png";

class Welcome extends React.Component {
  state = {
    value:''
  }

  handleChange = (ev) => {
    const newValue = ev.target.value;
    this.setState({ value: newValue });
}

  handleClick = () => {
    const usernames = this.props.users.map(x => x= x.username);
    const found = usernames.find(x => x=== this.state.value)
    if (this.state.value !== '' && found === undefined){
      this.props.chooseUsername(this.state.value);
      this.props.history.push('/chat-room');
    } 
    else if (this.state.value===''){
      return null;
    }
    else {
      alert('Name already taken');
    }
    
}
  goToChat = () => {
    this.props.history.push('/chat-room');
  }
  render(){
    if (this.props.username === ''){
      return(
        <div className="welcome-container">
          <img src={logo} alt="logo" height="200px" width='200px'></img>
          <p className="welcome-tagline">How would you like to be called?</p>
          <p>Choose a username below:</p>
          <input type="text" required value={this.state.value} onChange={this.handleChange} className="input-username"/>
          
          <button onClick={this.handleClick } className="submit-username">Go to chat</button>
        </div>
      )
    } else {
      return(
        <div className="welcome-container">
          <img src={logo} alt="logo" height="200px" width='200px'></img>
        
          <div className="welcome-back">Welcome back, <b>{this.props.username}</b> ! </div>
          <button onClick={this.goToChat} className="submit-username">Go to chat</button>
        </div>
      )
    }

  }
}
export default Welcome;