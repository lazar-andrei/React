import React from 'react';
import AddElement from './AddElement';
import ResoList from './ResoList';
import Header from './Header';
import base from '../base';
import firebase from 'firebase';

class App extends React.Component{
 //Initiate state
  state ={
    elements : {},
    completedElements: {},
    uncompletedElements: {},
    option: 'all',
  };

  componentDidMount(){
    
    base.post(`${this.props.userId}/option`, {
        data: this.state.option
      })
    this.ref= base.syncState(`${this.props.userId}/elements`, {
      context: this,
      state: 'elements',
    });
    this.ref= base.syncState(`${this.props.userId}/completedElements`, {
      context: this,
      state: 'completedElements',
    });
    this.ref= base.syncState(`${this.props.userId}/uncompletedElements`, {
      context: this,
      state: 'uncompletedElements',
    });
    this.ref= base.syncState(`${this.props.userId}/option`,{
      context:this,
      state: 'option'
    })
  }



  //componentWillUnmount(){
   // base.removeBindings(this.ref);
  //}

  // Add a new element to the list

  addElement =(element) =>{
    //1.Take a copy of the existing state
    const elements = {...this.state.elements};
    const uncompletedElements = {...this.state.uncompletedElements};

    //2.Add our new element to that elements variable
    elements[`element${Date.now()}`] = element;
    uncompletedElements[`element${Date.now()}`] = element;

    //3.Set the new elements object to state
    this.setState({
      elements: elements,
      uncompletedElements:uncompletedElements
    });
  }

  changeFilter =(event)=>{
    var option = event.target.value;
    this.setState({option});
  }


  modifyStatus =(key) =>{
    const elements = {...this.state.elements};
    const uncompletedElements = {...this.state.uncompletedElements};
    const completedElements = {...this.state.completedElements};
    
    elements[key].status = elements[key].status ==='completed' ? 'uncompleted' : 'completed'; 
    
    this.setState({elements});
    
    if (elements[key].status === 'completed'){
      uncompletedElements[key]= null;
      completedElements[key]=elements[key];
    }
    else {
      completedElements[key] = null;
      uncompletedElements[key]=elements[key];
    }
    this.setState({
      uncompletedElements:uncompletedElements,
      completedElements:completedElements
    })
  }

  removeFromList = (key) => {
    const elements = {...this.state.elements};
    elements[key] = null;
    this.setState({elements});
  }
  logout = async () => {
    console.log('Logging out!');
    await firebase.auth().signOut();
    this.props.updateLogStatus();
    this.props.history.push('/login');
  }
   
  render(){
    var filtered = this.state.option ==='all' ? this.state.elements : this.state.option === 'completed' ? this.state.completedElements : this.state.uncompletedElements;

    return(
      <div className="resolutions-of-the-year">
        <Header
          option={this.state.option}
          changeFilter = {this.changeFilter}
        />
        <AddElement 
          addElement={this.addElement} 
                    
        />
        <ResoList 
          elements={filtered}
          modifyStatus = {this.modifyStatus}  
          removeFromList= {this.removeFromList}
          option={this.state.option}
        />

        <button className="logout-button" onClick={this.logout}>LOG OUT</button>
      </div>
    )
  }
}

export default App;