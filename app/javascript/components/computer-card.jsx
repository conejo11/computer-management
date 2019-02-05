import React from 'react'
import ReactDOM from 'react-dom'

class List extends React.Component {
  render(){
    return(
      <div className="card">
        <img src="lala.jpg" />
        
        <div className="card-conteiner">
          <div className="card-text">
            <h5 className="card-text-header"><b>NOME DO COMPUTADOR</b></h5>
            <p className="card-text-content">Computador 1</p>
          </div>
          <div className="card-text">
            <h5 className="card-text-header"><b>CATEGORIA</b></h5>
            <p className="card-text-content">3D</p>
          </div>
        </div>
        
        <div className="card-text">
          <h5 className="card-text-header"><b>CPU</b></h5>
          <p className="card-text-content">17</p>
        </div>
        <div className="card-text">
          <h5 className="card-text-header"><b>GPU</b></h5>
          <p className="card-text-content">4</p>
        </div>
        <div className="card-text">
          <h5 className="card-text-header"><b>RAM</b></h5>
          <p className="card-text-content">33GB</p>
        </div>
        <div className="card-text">
          <h5 className="card-text-header"><b>DISCO</b></h5>
          <p className="card-text-content">481GB</p>
        </div>
      </div>
    );
  }
}

export default List
