import React from 'react';
import Message from './Message';
import {animateScroll} from "react-scroll";

class MessageList extends React.Component{

  
  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "messageList"
    });
  }
  render(){
  return(

    <ul className="messages" id="messageList">
      {this.props.messages.map(message =>(
        <li key={message.id}>
          <Message owner={message.owner} text={message.text} user={this.props.user}/>
        </li>
      ))}
    </ul>
        
  )
      }
}
export default MessageList;