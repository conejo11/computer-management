import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  render(){
    return (
      <div className='header-conteiner'>
        <header className='head'>
          <TextHeader />
          <WhiteButton />
        </header>
      </div>
    );
  }
}

class WhiteButton extends React.Component {
  render (){
    return (
      <button className='button-white' type='button'> <a className='a-orange'>ADICIONAR COMPUTADOR</a> </button>
    );
  }
}

class TextHeader extends React.Component {
  render (){
    return(
      <p>Listagem de Computadores</p>
    );
  }
}

export default Header
