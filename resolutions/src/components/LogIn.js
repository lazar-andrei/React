import React from "react";
import firebase from 'firebase';
import base, {firebaseApp} from "../base";


class LogIn extends React.Component{
  
  authHandler= async (authData) =>{
    
    await base.post('owner',{
      data:authData.user.uid
    })
    console.log(authData); 
    this.props.handleLoginResult(authData);
    this.props.history.push(`/${authData.user.uid}/app`);
   
  };
  
  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  }



  
  render(){

    return(
      <div className="login-container">
        
        <h2>Chose one login method from below:</h2>
        <nav className="login">
          <button className="login-button github" onClick={() => this.authenticate('Github')}>Log In With Github </button>
         
          <button className="login-button facebook" onClick={() => this.authenticate('Facebook')}>Log In With Facebook </button>
          
          <button className="login-button twitter" onClick={() => this.authenticate('Twitter')}>Log In With Twitter </button>
        </nav>
        <p>Once you login you can create your own list and keep track of your resolutions for the year</p>
      </div>
    )
  }
}
export default LogIn ;