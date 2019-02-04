import React from 'react'
import ReactDOM from 'react-dom'

class List extends React.Component {
  render(){
    return(
      <div className="card">
        <img src="lala.jpg" />
         <h4><b>John Doe</b></h4>
         <p>Architect & Engineer</p>
      </div>
    );
  }
}

export default List
