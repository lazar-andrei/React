import React from 'react';


class Element extends React.Component{
  
  
  handleClick = (key) =>{
    this.props.modifyStatus(this.props.index);
  }
  handleRemove = (key) =>{
    this.props.removeFromList(this.props.index);
  }
  render(){
    const isCompleted = this.props.details.status;

      return(
        <li className={'todo ' + isCompleted}>
          <span>{this.props.details.text}</span><i className="fas fa-check check" onClick={this.handleClick}></i><i className="fas fa-trash-alt remove-task" onClick={this.handleRemove}></i>
        </li>
      )
    }
   
  
}

export default Element;