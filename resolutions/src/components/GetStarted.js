import React from 'react';


class GetStarted extends React.Component{
  constructor(){
    super();
    this.goToLogIn = this.goToLogIn.bind(this);
  }

  goToLogIn(event){
    event.preventDefault();
    this.props.history.push('/login');
    
  }

  render(){
    return(
    <div className="get-started-container" >
      <h2>Resolutions List</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam?</p>
      
      <button className="get-started" 
              type="submit" 
              onClick={this.goToLogIn}>
              Get Started
      
      </button>
      
    </div>
    )
  }
}

export default GetStarted;