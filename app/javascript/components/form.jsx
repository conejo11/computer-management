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
    let area;
    if((parseInt(this.formFields.cpu.value) > 16) && (parseInt(this.formFields.gpu.value) > 3) && (parseInt(this.formFields.ram.value) > 32) && (parseInt(this.formFields.disc.value) > 480)) {
      area = '3D';
    } else if((parseInt(this.formFields.cpu.value) > 8) && (parseInt(this.formFields.gpu.value) > 2) && (parseInt(this.formFields.ram.value) > 16) && (parseInt(this.formFields.disc.value) > 240)) {
      area = 'Animação';
    } else if((parseInt(this.formFields.cpu.value) > 6) && (parseInt(this.formFields.gpu.value) > 1) && (parseInt(this.formFields.ram.value) > 8) && (parseInt(this.formFields.disc.value) > 240)) {
      area = 'Design';
    } else if((parseInt(this.formFields.cpu.value) > 4) && (parseInt(this.formFields.gpu.value) > 0) && (parseInt(this.formFields.ram.value) > 8) && (parseInt(this.formFields.disc.value) > 120)) {
      area = 'Desenvolvimento';
    } else if((parseInt(this.formFields.cpu.value) > 1) && (parseInt(this.formFields.gpu.value) > 0) && (parseInt(this.formFields.ram.value) > 4) && (parseInt(this.formFields.disc.value) > 120)) {
      area = 'Administrativo/Negócios';
    } else {
      area = 'Invalido'
    }
    
    console.log("names: " + this.formFields.names.value + "!");
    console.log("cpu: " + this.formFields.cpu.value + "!");
    console.log("gpu: " + this.formFields.gpu.value + "!");
    console.log("ram: " + this.formFields.ram.value + "!");
    console.log("disc: " + this.formFields.disc.value + "!");
    console.log("area: " + area + "!");
    
    fetch('/create_computer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        names: this.formFields.names.value,
        cpu:  this.formFields.cpu.value,
        gpu: this.formFields.gpu.value,
        ram:  this.formFields.ram.value,
        disc: this.formFields.disc.value,
        area: area,
      })
    }).then(raw_result => {
      raw_result
        .json()
        .then(result => {
          alert(result.message);
        });
    });
    
    alert('Sending this information:\n' + 'Name: ' + this.formFields.names.value + '\n' + 'CPU: ' + this.formFields.cpu.value + '\n' + 'GPU: ' + this.formFields.gpu.value + '\n' + 'RAM: ' + this.formFields.ram.value + '\n' + 'DISC: ' + this.formFields.disc.value + '\n' + 'AREA: ' + area);
    event.preventDefault();
  }
  

  render (){
    return(
      <form>
        <div className='form-conteiner'>
          <h2>Adicionar Novo Computador</h2>
          <div>
            <input ref={input => this.formFields.names = input} onChange={this.handleChange} placeholder="Nome do computador" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Nome do computador"}/>
            <input ref={input => this.formFields.cpu = input} onChange={this.handleChange}  placeholder="CPU" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "CPU"}/>
          </div>
          <div>
            <input ref={input => this.formFields.gpu = input} onChange={this.handleChange}  placeholder="GPU" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "GPU"}/>
            <input ref={input => this.formFields.ram = input} onChange={this.handleChange}  placeholder="RAM" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "RAM"}/>
          </div>
          <div>
            <input ref={input => this.formFields.disc = input}  onChange={this.handleChange} placeholder="DISCO" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "DISCO"}/>
            <h4>FAZER UPLOAD DE IMAGEM</h4>
            <input  className="image-class" onChange={this.handleChange} ref="description" placeholder="ESCOLHER IMAGEM" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "ESCOLHER IMAGEM"}/>
          </div>
          <div>
            <button className='button-orange' onClick={this.handleSubmit}>ADICIONAR</button>
          </div>
        </div>
      </form>
    );
  }
}


export default FormComputer
