
import React from 'react';


const Message = (props)=> {
  if (props.user.username === props.owner ){
  return(
    <div className="sent-message-container">
      <h5 className="sent-username username">{props.owner}</h5>
      <p className="sent-message message">{props.text}</p>
    </div>
  );
  } else{
    return(
    <div className="recieved-message-container">
      <h5 className="recieved-username username">{props.owner}</h5>
      <p className="recieved-message message">{props.text}</p>
    </div>
    );
  }
};

export default Message;