import React from 'react'
import ReactDOM from 'react-dom'

class List extends React.Component {

  createTable() {
    let table = [];

    console.log(this.props.computers);

    let computers = JSON.parse(this.props.computers || "");
    for (let computer of computers) {
      table.push(
        <div className="card" key={computer.id}>
          <img src={computer.image_data} />

          <div className="card-conteiner">
            <div className="card-text">
              <h5 className="card-text-header"><b>NOME DO COMPUTADOR</b></h5>
              <p className="card-text-content">{computer.name}</p>
            </div>

            <div className="card-text">
              <h5 className="card-text-header"><b>CATEGORIA</b></h5>
              <p className="card-text-content">{computer.category}</p>
            </div>
          </div>

          <div className="card-text">
            <h5 className="card-text-header"><b>CPU</b></h5>
            <p className="card-text-content">{computer.cpu}</p>
          </div>

          <div className="card-text">
            <h5 className="card-text-header"><b>GPU</b></h5>
            <p className="card-text-content">{computer.gpu}</p>
          </div>

          <div className="card-text">
            <h5 className="card-text-header"><b>RAM</b></h5>
            <p className="card-text-content">{computer.ram}GB</p>
          </div>

          <div className="card-text">
            <h5 className="card-text-header"><b>DISCO</b></h5>
            <p className="card-text-content">{computer.disk}GB</p>
          </div>
        </div>
      );
    }

    return table;
  };

  render() {
    return this.createTable();
  }
}

export default List;
