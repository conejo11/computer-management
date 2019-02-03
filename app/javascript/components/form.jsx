import React from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from "react-router-dom"

class FormComputer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRedirect = () => {
    this.props.history.push("./computer-list");
  };


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleSubmit(event) {
    alert('Sending this information: ' + this.state.value);
    event.preventDefault();
}

  render (){
    return(
      <div className='form-conteiner'>
        <a>ADICIONAR NOVO COMPUTADOR</a>
        <div>
          <input onChange={this.handleChange} ref="name" placeholder="Enter the name of the item" />
          <input onChange={this.handleChange} ref="description" placeholder="Enter a description" />
        </div>
        <div>
          <input onChange={this.handleChange} ref="name" placeholder="Enter the name of the item" />
          <input onChange={this.handleChange} ref="description" placeholder="Enter a description" />
        </div>
        <div>
          <input  onChange={this.handleChange} ref="name" placeholder="Enter the name of the item" />
          <input  onChange={this.handleChange} ref="description" placeholder="Enter a description" />
        </div>
        <div>
        <button className='button-white' onClick={this.handleRedirect}><a className='a-orange'>VOLTAR</a></button>
        <button className='button-orange' onClick={this.handleSubmit}>ADICIONAR</button>
        </div>
      </div>
    );
  }
}


export default FormComputer
