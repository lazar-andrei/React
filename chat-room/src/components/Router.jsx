import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from "./Login"
import App from "./App"
import Welcome from "./Welcome"
import base from '../base'
import {firebaseApp} from "../base";


class Router extends React.Component{

  state={
    loading: true,
    users:[],

   user:{
    uid:'',
    username:''
   }
  }

  componentDidMount(){
    const localStorageRef = localStorage.getItem('user');
    if(localStorageRef){
      this.setState({user: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState('users',{
      context:this,
      state: 'users',
      asArray: true,
      then: () => {
        this.setState({ loading: false });
        firebaseApp.auth().onAuthStateChanged(user =>{
          if (user){
            this.authHandler(user);
          }
          else return null
        })
      }
    })
    
    
  }

  componentDidUpdate(){
    localStorage.setItem('user', JSON.stringify(this.state.user))
    
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  handleAuth =(uid) =>{
    const user=this.state.users.find(x => x.uid === uid);
    if(user !== undefined){
      this.setState({
        user:user
          
      })
    }
    else{
    const user = {
      uid: uid,
      username:'',
    }
    const newUsers=[...this.state.users,user];
    console.log(newUsers);
    this.setState({
      users:newUsers,
      user: {
        ...this.state.user, uid:uid  
      }

    })}
  }

  chooseUsername = (username)  =>{
    const index= this.state.users.findIndex( x => x.uid === this.state.user.uid);
    const usernames = this.state.users.map(x => x= x.username);
    const found = usernames.find(x => x===username);
   
    if (index === -1) {
      console.warn('nu am gasit user-ul. Ceva a mers foarte prost');
      
    } else {
      if( found === undefined){
     
        const user= this.state.users[index];
        
        user.username = username;

        const newUsers = {...this.state.users};

        newUsers[index]= user;
        this.setState({users:newUsers,
          user:{...this.state.user, username:username}
        });

      }
      
      else {alert('Name already taken')}
    }
  }

  onLogout = () =>{
    this.setState({user:{
      uid:'',
      username:''
    }})
  }

  authHandler= (user) =>{
    if (user) { 
    // this.props.handleAuth(user.uid);
    this.handleAuth(user.uid);
    console.log(this.props);
    this.props.history.push(`${user.uid}/welcome`);
    console.log('logged in');
    console.log(user.uid);
    }
  };


  render(){
    return this.state.loading ? <span>Loading....</span> : (
      <Switch>
        <Route exact path="/" 
          render={(props) => <Login 
          handleAuth={this.handleAuth}
          {...props}
          />}
        />
        <Route path="*/welcome" render={(props)=> <Welcome 
        chooseUsername= {this.chooseUsername}
        username = {this.state.user.username}
        users ={this.state.users}
        {...props}        
        />}
        />
        <Route path="/chat-room" render={(props)=> <App 
          user={this.state.user}
          users={this.state.users}
          onLogout = {this.onLogout}
          {...props}
          /> }

        />

      </Switch>
    )
  }
}

export default withRouter(Router);