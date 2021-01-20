import React from 'react';


class SendMessage extends React.Component{
  state={
    value: ''
  };

  handleChange =(ev)=>{
    const newValue= ev.target.value;
    this.setState({value:newValue});
  }

  handleSubmit =(event) =>{
    event.preventDefault();
    if (this.state.value ===''){
      return null
    }
    else{
      
      this.props.onSubmitMessage(this.state.value);
      this.setState({value:''})
    }
  }

  render(){
    return(
      
      <form onSubmit={this.handleSubmit} className="form-container">
        <textarea type="text" value={this.state.value} onChange={this.handleChange}></textarea>
        <button type="submit" className="send-message">Send</button>
      </form>
    )
  }
}

export default SendMessage;