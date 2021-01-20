import React from 'react';

class AddElement extends React.Component{
  
  myInput = React.createRef();

  
  createElement = (event) => {
    event.preventDefault();
    
    const element={
      text: this.myInput.current.value,
      status: 'uncompleted'
    }

    this.props.addElement(element);
    
    event.currentTarget.reset();

  } 

  
  render(){
    return(
      
      <form className="form" onSubmit={this.createElement}>
        <input 
          type="text"
          ref={this.myInput}
          required
          placeholder="Add resolution"
        />
        <button className="add-button" type="submit"><i className="fas fa-plus"></i></button>
      </form>
      
      
    )
    }
  }
export default AddElement;
   