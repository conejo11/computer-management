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

    this.formFields = {};
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
    console.log("first_name: " + this.formFields.first_name.value + "!");
    console.log("first_desc: " + this.formFields.first_desc.value + "!");
    console.log("second_name: " + this.formFields.second_name.value + "!");
    console.log("second_desc: " + this.formFields.second_desc.value + "!");
    console.log("third_name: " + this.formFields.third_name.value + "!");
    console.log("third_desc: " + this.formFields.third_desc.value + "!");

    fetch('/create_computer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.formFields.first_name.value,
        first_desc:  this.formFields.first_desc.value,
        second_name: this.formFields.second_name.value,
        second_desc:  this.formFields.second_desc.value,
        third_name: this.formFields.third_name.value,
        third_desc:  this.formFields.third_desc.value,
      })
    }).then(raw_result => {
      raw_result
        .json()
        .then(result => {
          alert(result.message);
        });
    });

    event.preventDefault();
  }

  render (){
    return(
      <form>
        <div className='form-conteiner'>
          <a>ADICIONAR NOVO COMPUTADOR</a>
          <div>
            <input ref={input => this.formFields.first_name = input} onChange={this.handleChange} placeholder='Enter the name of the item'/>
            <input ref={input => this.formFields.first_desc = input} onChange={this.handleChange} placeholder="Enter a description" />
          </div>
          <div>
            <input ref={input => this.formFields.second_name = input} onChange={this.handleChange} placeholder="Enter the name of the item" />
            <input ref={input => this.formFields.second_desc = input} onChange={this.handleChange} placeholder="Enter a description" />
          </div>
          <div>
            <input  ref={input => this.formFields.third_name = input} onChange={this.handleChange} placeholder="Enter the name of the item" />
            <input  ref={input => this.formFields.third_desc = input} onChange={this.handleChange} placeholder="Enter a description" />
          </div>
          <div>
          <button className='button-white' onClick={this.handleRedirect}><a className='a-orange'>VOLTAR</a></button>
          <button className='button-orange' onClick={this.handleSubmit}>ADICIONAR</button>
          </div>
        </div>
      </form>
    );
  }
}


export default FormComputer
