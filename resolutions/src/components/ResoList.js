import React from 'react';
import Element from './Element';

class ResoList extends React.Component{


  render(){
    return(
      <ul className="elements">
        {Object.keys(this.props.elements).map(key => <Element 
          key={key} 
          index={key}
          details={this.props.elements[key]}
          modifyStatus={this.props.modifyStatus}
          removeFromList={this.props.removeFromList}
          option={this.props.option}
          />
         )}

      </ul>
    )
  }
}

export default ResoList;