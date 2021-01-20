import React from "react";

const Login = (props) => (
  <nav className="Login">
    <h2> Inventory Login </h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={()=> props.authenticate('Github')}>Log in with Github</button>

    <button className="twitter" onClick={()=> props.authenticate('Twitter')}>Log in with Twitter</button>

    <button className="facebook" onClick={()=> props.authenticate('Facebook')}>Log in with Facebook</button>
  </nav>
);

export default Login;
