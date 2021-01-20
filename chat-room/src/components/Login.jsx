import React from "react";
import firebase from 'firebase';
import {firebaseApp} from "../base";
import logo from "../assets/logo.png";


class Login extends React.Component{
  
   componentDidMount(){
     }

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithRedirect(authProvider);
    //firebaseApp.auth().onAuthStateChanged(this.authHandler);
    
    
  };

  render(){
      
      return(
        <div className="login-container">
          <img src={logo} alt="logo" height="200px" width='200px'></img>
          
          <nav className="login">
            <h2>Chose one login method from below:</h2>
            <button className="login-button facebook" onClick={() => this.authenticate('Facebook')}>Log In With Facebook </button>

            <button className="login-button github" onClick={() => this.authenticate('Github')}>Log In With Github </button>
          
          <button className="login-button twitter" onClick={() => this.authenticate('Twitter')}>Log In With Twitter </button>
          </nav>
        </div>)
    

  }
}
export default Login ;