import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GetStarted from "./GetStarted";
import NotFound from "./NotFound";
import LogIn from "./LogIn";
import App from "./App";


//const Router =() => (
//  <BrowserRouter>
//    <Switch>
//      <Route exact path="/" component={GetStarted}/>
//      <Route path="/login" component={LogIn} />
//      <Route path="*/app" component={App}/>
//      <Route  component={NotFound}/>
//      
//    </Switch>
//  </BrowserRouter>
//)




class Router extends React.Component {
  
  state = {
    userId: null
  }
  
  handleLoginResult = (authData) => this.setState({ userId: authData.user.uid })
  
  updateLogStatus = async () => {
    this.setState ({userId: null})
  }

 
   // or whatever the data is
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GetStarted}/>
          <Route path="/login" render={(props) => <LogIn handleLoginResult={this.handleLoginResult}
          {...props}

          />} />
          <Route path="*/app" render={(props) => <App 
            userId={this.state.userId} 
            updateLogStatus= {this.updateLogStatus}  
            {...props}
            />
            }/>
          <Route  component={NotFound}/>
        </Switch>
      </BrowserRouter>
)
    }
  }
  export default Router;