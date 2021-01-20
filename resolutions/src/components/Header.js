import React from 'react';

class Header extends React.Component{
  handleChange = (event) => {
    event.preventDefault();
    this.props.changeFilter(event);
    console.log(event.target.value);
  }
  render(){
    return(
      <div className="title-container">
        <h1 className="title"> Resolutions list </h1>
        <div className="select-container select-container-mobile">  
          <select name="filter" className="select select-mobile" onChange={this.handleChange}>
            <option value="all"> All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Not completed</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Header;