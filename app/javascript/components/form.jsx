import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './header'

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

    fetch('/computer_list', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.formFields.name.value,
        cpu:  this.formFields.cpu.value,
        gpu: this.formFields.gpu.value,
        ram:  this.formFields.ram.value,
        disk: this.formFields.disk.value,
        image_data: this.formFields.image_data.value,
      })
    }).then(raw_result => {
      raw_result
        .json()
        .then(result => {
          alert(result.message);
        });
    });

    alert('Sending this information:\n' + 'Name: ' + this.formFields.name.value + '\n' + 'CPU: ' + this.formFields.cpu.value + '\n' + 'GPU: ' + this.formFields.gpu.value + '\n' + 'RAM: ' + this.formFields.ram.value + '\n' + 'disk: ' + this.formFields.disk.value + '\n' );
    event.preventDefault();
  }


  render (){
    return(
      <form>
        <div>
          <h2 className='form-title'>Adicionar Novo Computador</h2>
          <div className='form-conteiner'>
            <div>
              <input ref={input => this.formFields.name = input} onChange={this.handleChange} placeholder="Nome do computador" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Nome do computador"}/>
              <input ref={input => this.formFields.cpu = input} onChange={this.handleChange}  placeholder="CPU" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "CPU"}/>
            </div>
            <div>
              <input ref={input => this.formFields.gpu = input} onChange={this.handleChange}  placeholder="GPU" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "GPU"}/>
              <input ref={input => this.formFields.ram = input} onChange={this.handleChange}  placeholder="RAM" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "RAM"}/>
            </div>
            <div>
              <input ref={input => this.formFields.disk = input}  onChange={this.handleChange} placeholder="DISCO" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "diskO"}/>
              <h4>FAZER UPLOAD DE IMAGEM</h4>
              <input  ref={input => this.formFields.image_data = input} className="image-class" onChange={this.handleChange} placeholder="ESCOLHER IMAGEM" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "ESCOLHER IMAGEM"}/>
            </div>
            <div>
              <button className='button-orange' onClick={this.handleSubmit}><strong>ADICIONAR</strong></button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}


export default FormComputer
